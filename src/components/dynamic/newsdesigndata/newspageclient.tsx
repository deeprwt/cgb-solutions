"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/database/firebase";
import ArticleDetailsArea from "@/components/dynamic/articledesigndata/articledetialsarea";
import NewsDetailsArea from "@/components/dynamic/newsdesigndata/newsdetialsarea";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import article_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterOne from "@/layout/footer/footer-one";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeaderSix from "@/layout/header/header-six";


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

interface NewsPageClientProps {
  slug: string;
}

const NewsPageClient: React.FC<NewsPageClientProps> = ({ slug }) => {
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(collection(db, "news"), where("link", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc: QueryDocumentSnapshot<DocumentData> = querySnapshot.docs[0];
          setNews({ id: doc.id, ...doc.data() } as News);
        } else {
          setNews(null);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);


  return (
    <Wrapper>
      <div className="main-page-wrapper">
      <HeaderSix />
        <main>

          {loading ? (
            <div>
              <Skeleton height={400} />
              <Skeleton count={5} />
            </div>
          ) : (
            news ? (
              <NewsDetailsArea news={news} />
            ) : (
              <div>No article found.</div>
            )
          )}
          {/* <NewsDetailsArea news={news} /> */}
          <FancyBannerThree />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default NewsPageClient;
