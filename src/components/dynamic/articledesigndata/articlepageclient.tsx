"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/database/firebase";
import ArticleDetailsArea from "@/components/dynamic/articledesigndata/articledetialsarea";
import Wrapper from "@/layout/wrapper";
// import HeaderTwo from "@/layout/header/Header";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterOne from "@/layout/footer/footer-one";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeaderSix from "@/layout/header/header-six";

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
};

interface ArticlePageClientProps {
  slug: string;
}

const ArticlePageClient: React.FC<ArticlePageClientProps> = ({ slug }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const q = query(collection(db, "articles"), where("link", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc: QueryDocumentSnapshot<DocumentData> = querySnapshot.docs[0];
          setArticle({ id: doc.id, ...doc.data() } as Article);
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderSix />
        <main>
          
          {loading ? (
            <div className="article-details-skeleton">
              <Skeleton height={400} />
              <Skeleton count={5} />
            </div>
          ) : (
            article ? (
              <ArticleDetailsArea article={article} />
            ) : (
              <div>No article found.</div>
            )
          )}
          <FancyBannerThree />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default ArticlePageClient;
