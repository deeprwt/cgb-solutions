"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import blog_data from "@/data/blog-data";
import UseTag from "@/hooks/use-tag-count";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebase";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ArticleSidebar from "./article-sidebar";

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


const BlogSidebar = () => {

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesSnapshot = await getDocs(collection(db, "articles"));
        const articlesData = articlesSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Article)
        );
        setArticles(articlesData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  // Filter out draft articles and sort the remaining articles
  const filteredArticles = articles.filter((article) => !article.draft);

  const sortedArticles = filteredArticles.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const { currentItems, handlePageClick, pageCount } = usePagination<Article>(
    sortedArticles,
    3
  );  


  const { sustainabilityDataCount, itDataCount } = UseTag();
  const recent_blogs = blog_data
    .filter((b) => b.page === "blog-list")
    .slice(-2);
  return (
    <div className="blog-sidebar md-mt-60 ps-xxl-4">
      <form action="#" className="sidebar-search">
        <input type="text" placeholder="Search.." />
        <button className="tran3s">
          <i className="bi bi-search"></i>
        </button>
      </form> 
      <div className="blog-recent-news mt-60 lg-mt-40">
        <h3 className="sidebar-title">Recent Blogs</h3>
        {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mb-5">
                  <Skeleton height={250} />
                  <Skeleton count={3} />
                </div>
              ))
            ) : (
              currentItems.map((article) => (
                <div key={article.id} className="mb-5">
                    <ArticleSidebar article={article} />
                </div>
              ))
            )}
        {/* {recent_blogs.map((b, i) => (
          <article key={i} className="recent-news">
            <figure
              className="post-img"
              style={{
                backgroundImage: `url(${b.img.src})`,
              }}
            ></figure>
            <div className="post-data">
              <div className="date">{b.date}</div>
              <Link href={`/blog-details/${b.id}`} className="blog-title">
                <h3>{b.title}</h3>
              </Link>
            </div>
          </article>
        ))} */}
      </div>
      {/* <div className="blog-category mt-60 lg-mt-40">
        <h3 className="sidebar-title">Blog Category</h3>
        <ul className="style-none">
          <li>
            <Link href="#">
              Sustainability <span>( {sustainabilityDataCount} )</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              IT <span>( {itDataCount} )</span>
            </Link>
          </li>
        </ul>
      </div> */}

      {/* <div className="blog-keyword mt-60 lg-mt-40">
        <h3 className="sidebar-title">Keywords</h3>
        <ul className="style-none d-flex flex-wrap">
          <li>
            <Link href="#">Finance</Link>
          </li>
          <li>
            <Link href="#">Business</Link>
          </li>
          <li>
            <Link href="#">Online Banking</Link>
          </li>
          <li>
            <Link href="#">Consultation</Link>
          </li>
          <li>
            <Link href="#">Branding</Link>
          </li>
          <li>
            <Link href="#">Cards</Link>
          </li>
          <li>
            <Link href="#">Payments</Link>
          </li>
          <li>
            <Link href="#">Loan</Link>
          </li>
        </ul>
      </div> */}
      <div className="contact-banner text-center mt-50 lg-mt-30">
        <h3 className="mb-20">
          Any Questions? <br />
          Let’s talk
        </h3>
        <Link href="/contact" className="tran3s fw-500">
          Let’s Talk
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
