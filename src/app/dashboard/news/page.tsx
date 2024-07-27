'use client'
import React, { useState, useEffect, useCallback } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, where } from "firebase/firestore";
import { db, storage } from "@/database/firebase";
import { useRouter } from "next/navigation";
import { notifySuccess, notifyError } from "@/utils/toast";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import Wrapper from "@/layout/wrapper";
import FooterOne from "@/layout/footer/footer-one";
import Sidebar from "@/layout/admin/sidebar";
import withAuth from "@/components/hoc/withAuth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import NewsCard from "@/components/dynamic/newsdesigndata/newscard";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import debounce from 'lodash/debounce';

// Dynamically import ReactQuill with ssr: false
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

type News = {
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
};

const AddNews = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [news, setNews] = useState<News>({
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
  });
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNews, setCurrentNews] = useState<News | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsSnapshot = await getDocs(collection(db, "news"));
        const newsData = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as News));
        setNewsList(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const generateUniqueSlug = async (title: string): Promise<string> => {
    const baseSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let slug = baseSlug;
    let counter = 1;

    while (true) {
      const q = query(collection(db, "news"), where("link", "==", slug));
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

  const handleNewsSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      let imageUrl = news.imageUrl;

      if (imageUpload) {
        imageUrl = await uploadImage();
      }

      let link = news.link;
      if (!link) {
        link = await generateUniqueSlug(news.title);
      }

      const newNews: News = {
        ...news,
        date: news.date || "",
        imageUrl: imageUrl || "",
        link: link.toLowerCase().replace(/[*+~.()'"!:@]/g, '').replace(/\s+/g, '-') // Ensure link is in lowercase and hyphenated
      };

      if (isEditing && currentNews?.id) {
        const docRef = doc(db, "news", currentNews.id);
        await updateDoc(docRef, newNews);
        setNewsList(newsList.map(n => (n.id === currentNews.id ? newNews : n)));
        notifySuccess("News updated successfully!");
      } else {
        const docRef = await addDoc(collection(db, "news"), newNews);
        setNewsList([...newsList, { id: docRef.id, ...newNews }]);
        notifySuccess("News added successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Error submitting news:", error);
      notifyError("Failed to submit news");
    }
  };

  const uploadImage = async (): Promise<string | undefined> => {
    if (!imageUpload) return undefined;
    const imageRef = ref(storage, `newsimages/${imageUpload.name}_${Date.now()}`);
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

  const handleNewsDelete = async (id?: string) => {
    if (!id) return;
    const isConfirmed = window.confirm("Are you sure you want to delete this article?");
  if (!isConfirmed) return;
    try {
      await deleteDoc(doc(db, "news", id));
      setNewsList(newsList.filter(news => news.id !== id));
      notifySuccess("News deleted successfully!");
    } catch (error) {
      console.error("Error deleting news:", error);
      notifyError("Failed to delete news");
    }
  };

  const resetForm = () => {
    setNews({
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
    });
    setImageUpload(null);
    setCurrentNews(null);
    setIsEditing(false);
  };

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const sortedNewsList = newsList.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const { currentItems, handlePageClick, pageCount } = usePagination<News>(sortedNewsList, 3);

  const handleEdit = (news: News) => {
    setCurrentNews(news);
    setNews(news);
    setIsEditing(true);
  };

  // Debounce the handleQuillChange function to reduce re-renders
  const handleQuillChange = useCallback(
    debounce((content: string) => {
      setNews((prevNews) => ({ ...prevNews, post_info: content }));
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
                      <h2 className="name fw-bold m-0">{isEditing ? "Edit News" : "Add New News"}</h2>
                      <form onSubmit={handleNewsSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="image" className="form-label">Image</label>
                              <input
                                type="file"
                                className="form-control"
                                id="image"
                                onChange={(e) => setImageUpload(e.target.files?.[0] || null)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="date" className="form-label">Date</label>
                              <input
                                type="date"
                                className="form-control"
                                required
                                id="date"
                                value={news.date}
                                onChange={(e) => setNews({ ...news, date: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="title" className="form-label">Title</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                id="title"
                                value={news.title}
                                onChange={(e) => setNews({ ...news, title: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="author" className="form-label">Author</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                id="author"
                                value={news.author}
                                onChange={(e) => setNews({ ...news, author: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="category" className="form-label">Category</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                id="category"
                                value={news.category}
                                onChange={(e) => setNews({ ...news, category: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="link" className="form-label">Link</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                id="link"
                                value={news.link}
                                onChange={(e) => setNews({ ...news, link: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="metaKeywords" className="form-label">Meta Keywords</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                id="metaKeywords"
                                value={news.metaKeywords}
                                onChange={(e) => setNews({ ...news, metaKeywords: e.target.value })}
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
                                value={news.metaDescription}
                                onChange={(e) => setNews({ ...news, metaDescription: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label htmlFor="post_info" className="form-label">Post Information</label>
                              <ReactQuill
                                theme="snow"
                                value={news.post_info}
                                onChange={handleQuillChange}
                              />
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">{isEditing ? "Update" : "Save"}</button>
                        {isEditing && (
                          <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>
                        )}
                      </form>
                      <hr />
                      <h3 className="text-center mt-60 mb-60">Existing News</h3>
                      <div className="row gx-xxl-5">
                        {currentItems.map(news => (
                          <div key={news.id} className="col-md-4">
                            <NewsCard news={news} onDelete={handleNewsDelete} onEdit={handleEdit} />
                          </div>
                        ))}
                      </div>
                      <div className="pagination-one mt-20">
                        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
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

export default withAuth(AddNews);
