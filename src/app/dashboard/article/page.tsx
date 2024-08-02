"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db, storage } from "@/database/firebase";
import { useRouter } from "next/navigation";
import { notifySuccess, notifyError } from "@/utils/toast";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Wrapper from "@/layout/wrapper";
import FooterOne from "@/layout/footer/footer-one";
import Sidebar from "@/layout/admin/sidebar";
import withAuth from "@/components/hoc/withAuth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import ArticleCard from "@/components/dynamic/articlecard";
import ArticleCard from "@/components/dynamic/articledesigndata/articlecard";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import debounce from 'lodash/debounce';

// Dynamically import ReactQuill with ssr: false
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type Article = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  category: string;
  metaKeywords: string;
  metaDescription: string;
  link: string;
  draft: boolean; // Add this line
};

const AddArticle = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [article, setArticle] = useState<Article>({
    image: "",
    imageUrl: "",
    date: "",
    title: "",
    author: "",
    post_info: "",
    category: "",
    metaKeywords: "",
    metaDescription: "",
    link: "",
    draft: false, // Add this line
  });
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesSnapshot = await getDocs(collection(db, "articles"));
        const articlesData = articlesSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Article)
        );
        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const generateUniqueSlug = async (title: string): Promise<string> => {
    const baseSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    let slug = baseSlug;
    let counter = 1;

    while (true) {
      const q = query(collection(db, "articles"), where("link", "==", slug));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        break;
      } else {
        slug = `${baseSlug}-${counter}`;
        counter++;
      }
    }

    return slug;
  };

  const handleArticleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      let imageUrl = article.imageUrl;

      if (imageUpload) {
        imageUrl = await uploadImage();
      }

      let link = article.link;
      if (!link) {
        link = await generateUniqueSlug(article.title);
      }

      const newArticle: Article = {
        ...article,
        date: article.date || "",
        imageUrl: imageUrl || "",
        link: link.toLowerCase().replace(/[*+~.()'"!:@]/g, '').replace(/\s+/g, "-"), // Ensure link is in lowercase and hyphenated
      };

      if (isEditing && currentArticle?.id) {
        const docRef = doc(db, "articles", currentArticle.id);
        await updateDoc(docRef, newArticle);
        setArticles(
          articles.map((a) => (a.id === currentArticle.id ? newArticle : a))
        );
        notifySuccess("Article updated successfully!");
        resetForm();
      } else {
        const docRef = await addDoc(collection(db, "articles"), newArticle);
        setArticles([...articles, { id: docRef.id, ...newArticle }]);
        notifySuccess("Article added successfully!");
        resetForm();
      }

      resetForm();
    } catch (error) {
      console.error("Error submitting article:", error);
      notifyError("Failed to submit article");
    }
  };

  const uploadImage = async (): Promise<string | undefined> => {
    if (!imageUpload) return undefined;
    const imageRef = ref(
      storage,
      `articleimages/${imageUpload.name}_${Date.now()}`
    );
    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      notifyError("Failed to upload image");
      return undefined;
    }
  };

  const handleArticleDelete = async (id?: string) => {
    if (!id) return;
    const isConfirmed = window.confirm("Are you sure you want to delete this article?");
  if (!isConfirmed) return;
    try {
      await deleteDoc(doc(db, "articles", id));
      setArticles(articles.filter((article) => article.id !== id));
      notifySuccess("Article deleted successfully!");
    } catch (error) {
      console.error("Error deleting article:", error);
      notifyError("Failed to delete article");
    }
  };

  const toggleDraftStatus = async (id?: string, currentDraftStatus?: boolean) => {
    if (!id) return;
    try {
      const docRef = doc(db, "articles", id);
      await updateDoc(docRef, { draft: !currentDraftStatus });
      setArticles(
        articles.map((article) =>
          article.id === id ? { ...article, draft: !currentDraftStatus } : article
        )
      );
      notifySuccess("Article draft status updated successfully!");
    } catch (error) {
      console.error("Error updating draft status:", error);
      notifyError("Failed to update draft status");
    }
  };

  const resetForm = () => {
    setArticle({
      image: "",
      imageUrl: "",
      date: "",
      title: "",
      author: "",
      post_info: "",
      category: "",
      metaKeywords: "",
      metaDescription: "",
      link: "",
      draft: false, // Add this line
    });
    setImageUpload(null);
    setCurrentArticle(null);
    setIsEditing(false);
  };

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const sortedArticles = articles.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const { currentItems, handlePageClick, pageCount } = usePagination<Article>(
    sortedArticles,
    3
  );

  const handleEdit = (article: Article) => {
    setCurrentArticle(article);
    setArticle(article);
    setIsEditing(true);
  };

    // Debounce the handleQuillChange function to reduce re-renders
    const handleQuillChange = useCallback(
      debounce((content: string) => {
        setArticle((prevArticle) => ({ ...prevArticle, post_info: content }));
      }, 300),
      []
    );

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <Sidebar />
        <main>
          <div className="team-details light-bg border-top pt-120 lg-pt-80 pb-120 lg-pb-80">
            <div className="container">
              <div className="bg-wrapper">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                      <h2 className="name fw-bold m-0">
                        {isEditing ? "Edit Article" : "Add New Article"}
                      </h2>
                      <form onSubmit={handleArticleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="image" className="form-label">
                              Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="image"
                              onChange={(e) =>
                                setImageUpload(e.target.files?.[0] || null)
                              }
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="date" className="form-label">
                              Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              required
                              id="date"
                              value={article.date}
                              onChange={(e) =>
                                setArticle({ ...article, date: e.target.value })
                              }
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="title" className="form-label">
                              Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              id="title"
                              value={article.title}
                              onChange={(e) =>
                                setArticle({
                                  ...article,
                                  title: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="author" className="form-label">
                              Author
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              id="author"
                              value={article.author}
                              onChange={(e) =>
                                setArticle({
                                  ...article,
                                  author: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="category" className="form-label">
                              Category
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              id="category"
                              value={article.category}
                              onChange={(e) =>
                                setArticle({
                                  ...article,
                                  category: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="link" className="form-label">
                              Article Slug (link)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              id="link"
                              value={article.link}
                              onChange={(e) =>
                                setArticle({ ...article, link: e.target.value })
                              }
                            />
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="metaKeywords" className="form-label">Meta Keywords</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                id="metaKeywords"
                                value={article.metaKeywords}
                                onChange={(e) => setArticle({ ...article, metaKeywords: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="metaDescription" className="form-label">Meta Description</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                id="metaDescription"
                                value={article.metaDescription}
                                onChange={(e) => setArticle({ ...article, metaDescription: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <label htmlFor="post_info" className="form-label">
                              Post Information
                            </label>
                            <ReactQuill
                              theme="snow"
                              value={article.post_info}
                              onChange={handleQuillChange}
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          {isEditing ? "Update" : "Save"}
                        </button>
                        {isEditing && (
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={resetForm}
                          >
                            Cancel
                          </button>
                        )}
                      </form>
                      <hr />
                      <h3 className="text-center mt-60 mb-60">
                        Existing Articles
                      </h3>
                      <div className="row gx-xxl-5">
                        {currentItems.map((article) => (
                          <div key={article.id} className="col-md-4">
                            <ArticleCard
                              article={article}
                              onDelete={handleArticleDelete}
                              onEdit={handleEdit}
                              onToggleDraftStatus={toggleDraftStatus} // Pass the function here
                            />
                          </div>
                        ))}
                      </div>
                      <div className="pagination-one mt-20">
                        <Pagination
                          handlePageClick={handlePageClick}
                          pageCount={pageCount}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default withAuth(AddArticle);
