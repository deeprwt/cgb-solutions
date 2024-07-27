'use client';
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
import BlogCard from "@/components/dynamic/blogcard";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import debounce from 'lodash/debounce';

// Dynamically import ReactQuill with ssr: false
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

type Blog = {
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

const AddBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blog, setBlog] = useState<Blog>({
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
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsSnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const generateUniqueSlug = async (title: string): Promise<string> => {
    const baseSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]+/g, '') // Remove special characters
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+$/, ''); // Remove trailing hyphens

    let slug = baseSlug;
    let counter = 1;

    while (true) {
      const q = query(collection(db, "blogs"), where("link", "==", slug));
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

  const handleBlogSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      let imageUrl = blog.imageUrl;

      if (imageUpload) {
        imageUrl = await uploadImage();
      }

      let link = blog.link;
      if (!link) {
        link = await generateUniqueSlug(blog.title);
      }

      const newBlog: Blog = {
        ...blog,
        date: blog.date || "",
        imageUrl: imageUrl || "",
        link: link.toLowerCase().replace(/[*+~.()'"!:@]/g, '').replace(/\s+/g, '-') // Ensure link is in lowercase and hyphenated
      };

      if (isEditing && currentBlog?.id) {
        const docRef = doc(db, "blogs", currentBlog.id);
        await updateDoc(docRef, newBlog);
        setBlogs(blogs.map(b => (b.id === currentBlog.id ? newBlog : b)));
        notifySuccess("Blog updated successfully!");
      } else {
        const docRef = await addDoc(collection(db, "blogs"), newBlog);
        setBlogs([...blogs, { id: docRef.id, ...newBlog }]);
        notifySuccess("Blog added successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Error submitting blog:", error);
      notifyError("Failed to submit blog");
    }
  };

  const uploadImage = async (): Promise<string | undefined> => {
    if (!imageUpload) return undefined;
    const imageRef = ref(storage, `blogimages/${imageUpload.name}_${Date.now()}`);
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

  const handleBlogDelete = async (id?: string) => {
    if (!id) return;
    const isConfirmed = window.confirm("Are you sure you want to delete this article?");
  if (!isConfirmed) return;
    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs(blogs.filter(blog => blog.id !== id));
      notifySuccess("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      notifyError("Failed to delete blog");
    }
  };

  const resetForm = () => {
    setBlog({
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
    setCurrentBlog(null);
    setIsEditing(false);
  };

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const sortedBlogs = blogs.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const { currentItems, handlePageClick, pageCount } = usePagination<Blog>(sortedBlogs, 3);

  const handleEdit = (blog: Blog) => {
    setCurrentBlog(blog);
    setBlog(blog);
    setIsEditing(true);
  };

    // Debounce the handleQuillChange function to reduce re-renders
    const handleQuillChange = useCallback(
      debounce((content: string) => {
        setBlog((prevBlog) => ({ ...prevBlog, post_info: content }));
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
                      <h2 className="name fw-bold m-0">{isEditing ? "Edit Blog" : "Add New Blog"}</h2>
                      <form onSubmit={handleBlogSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input
                              type="file"
                              className="form-control"
                              id="image"
                              onChange={(e) => setImageUpload(e.target.files?.[0] || null)}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input
                              type="date"
                              className="form-control"
                              required
                              id="date"
                              value={blog.date}
                              onChange={(e) => setBlog({ ...blog, date: e.target.value })}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              id="title"
                              value={blog.title}
                              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              id="author"
                              value={blog.author}
                              onChange={(e) => setBlog({ ...blog, author: e.target.value })}
                            />
                          </div>

                          <div className="col-md-6 mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              id="category"
                              value={blog.category}
                              onChange={(e) => setBlog({ ...blog, category: e.target.value })}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="link" className="form-label">Blog Slug (link)</label>
                            <input
                              type="text"
                              className="form-control"
                              id="link"
                              value={blog.link}
                              onChange={(e) => setBlog({ ...blog, link: e.target.value })}
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
                                value={blog.metaKeywords}
                                onChange={(e) => setBlog({ ...blog, metaKeywords: e.target.value })}
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
                                value={blog.metaDescription}
                                onChange={(e) => setBlog({ ...blog, metaDescription: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <label htmlFor="post_info" className="form-label">Post Information</label>
                            <ReactQuill
                              theme="snow"
                              value={blog.post_info}
                              onChange={handleQuillChange}
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">{isEditing ? "Update" : "Save"}</button>
                        {isEditing && (
                          <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>
                        )}
                      </form>
                      <hr />
                      <h3 className="text-center mt-60 mb-60">Existing Blogs</h3>
                      <div className="row gx-xxl-5">
                        {currentItems.map(blog => (
                          <div key={blog.id} className="col-md-4">
                            <BlogCard blog={blog} onDelete={handleBlogDelete} onEdit={handleEdit} />
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

export default withAuth(AddBlog);
