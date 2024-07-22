"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/database/firebase";
import UseSocialShare from "@/components/socail-media/socialshare";
import BlogSidebar from "@/components/blogs/blog-sidebar";

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

const BlogDetailsArea: React.FC<{ blog: Blog }> = ({ blog }) => {
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${blog.imageUrl || blog.image})` }}
              >
                <div className="date">{blog.date}</div>
              </figure>
              <div className="post-data">
                <div className="post-info">{blog.category}</div>
                <div className="blog-title">
                  <h4>{blog.title}</h4>
                </div>
                <div className="post-details-meta">
                  <div dangerouslySetInnerHTML={{ __html: blog.post_info }} />
                </div>
                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  <UseSocialShare />
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-md-8">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
