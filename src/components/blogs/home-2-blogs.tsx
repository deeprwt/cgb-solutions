"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebase";
// import ArticleWebsiteCard from "./articlewebsitecard";
import ArticleWebsiteCard from "../dynamic/articledesigndata/articlewebsitecard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import BlogItemTwo from "./blog-item/blog-item-two";

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

const ArticleList = () => {
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

  // Limit to 3 articles
  const limitedArticles = sortedArticles.slice(0, 3);

  return (
    <div className="blog-section-one service-details position-relative lg-mt-80 pt-120 lg-pt-80">
      <div className="container">
        <div className="position-relative">
        <div className="title-one details-meta mb-20 lg-mb-10">
            <h3>Latest Article.</h3>
          </div>
          <p className="text-lg mb-40 lg-mb-10">
          Unlock fresh perspectives and stay informed with our newest Article posts.
          </p>
          <div className="row gx-xxl-5">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="col-md-4 mb-5">
                  <Skeleton height={250} />
                  <Skeleton count={3} />
                </div>
              ))
            ) : (
              limitedArticles.map((article) => (
                <div key={article.id} className="col-md-4">
                  <BlogItemTwo article={article} />
                  {/* <ArticleWebsiteCard article={article} /> */}
                </div>
              ))
            )}
          </div>
          <div className="section-btn sm-mt-40">
            <Link href="/article" className="btn-five icon-link">
              <span className="text">See all Article</span>
              <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
