"use client";
import React, { useEffect, useState } from "react";
import UseSocialShare from "@/components/socail-media/socialshare";
import BlogSidebar from "@/components/blogs/blog-sidebar";

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

const NewsDetailsArea: React.FC<{ news: News }> = ({ news }) => {
  if (!news) {
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
                style={{ backgroundImage: `url(${news.imageUrl || news.image})` }}
              >
                <div className="date">{news.date}</div>
              </figure>
              <div className="post-data">
                <div className="post-info">{news.category}</div>
                <div className="blog-title">
                  <h4>{news.title}</h4>
                </div>
                <div className="post-details-meta">
                  <div dangerouslySetInnerHTML={{ __html: news.post_info }} />
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

export default NewsDetailsArea;
