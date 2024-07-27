"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/database/firebase";
import BlogDetailsArea from "@/components/dynamic/blogdetailsarea";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import blog_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterOne from "@/layout/footer/footer-one";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeaderSix from "@/layout/header/header-six";


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

interface BlogPageClientProps {
  slug: string;
}

const BlogPageClient: React.FC<BlogPageClientProps> = ({ slug }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const q = query(collection(db, "blogs"), where("link", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc: QueryDocumentSnapshot<DocumentData> = querySnapshot.docs[0];
          setBlog({ id: doc.id, ...doc.data() } as Blog);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
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
            blog ? (
              <BlogDetailsArea blog={blog} />
            ) : (
              <div>No article found.</div>
            )
          )}
          {/* <BlogDetailsArea blog={blog} /> */}
          <FancyBannerThree />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default BlogPageClient;
