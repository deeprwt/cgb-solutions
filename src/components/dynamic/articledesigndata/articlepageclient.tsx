"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/database/firebase";
import ArticleDetailsArea from "@/components/dynamic/articledesigndata/articledetialsarea";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import article_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterOne from "@/layout/footer/footer-one";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Single Article Details"
            subtitle=""
            page="Article"
            bg_img={article_bg}
            style_2={true}
          />
          <ArticleDetailsArea article={article} />
          <FancyBannerThree />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default ArticlePageClient;
