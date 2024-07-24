"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebase";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import NewsWebsiteCard from "./newswebsitecard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsSnapshot = await getDocs(collection(db, "news"));
        const newsData = newsSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as News)
        );
        setNews(newsData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const sortedNews = news.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const { currentItems, handlePageClick, pageCount } = usePagination<News>(
    sortedNews,
    4
  );

  return (
    <div className="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="position-relative">
          <div className="row gx-xxl-5">
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="col-md-6 mb-5">
                  <Skeleton height={250} />
                  <Skeleton count={3} />
                </div>
              ))
            ) : (
              currentItems.map((newsItem) => (
                <div key={newsItem.id} className="col-md-6">
                  <NewsWebsiteCard news={newsItem} />
                </div>
              ))
            )}
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
  );
};

export default NewsList;
