"use client";
import React, { useEffect, useState } from "react";
import UseSocialShare from "@/components/socail-media/socialshare";
import BlogSidebar from "@/components/blogs/blog-sidebar";
import Image, { StaticImageData } from "next/image";

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

const ArticleDetailsArea: React.FC<{ article: Article }> = ({ article }) => {
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details position-relative mt-80 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-12">
            <article className="blog-meta-two style-two">
              {/* <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${article.imageUrl || article.image})` }}
              >
                <div className="date">{article.date}</div>
              </figure> */}
              <Image
                src={article.imageUrl || article.image}
                alt={article.title || "Article Image"}
                layout="responsive"
                width={600}
                height={400}
                className="lazy-img me-auto ms-auto"
              />
              <div className="post-data">
                <div className="post-info">{article.category}</div>
                <div className="blog-title">
                  <h4>{article.title}</h4>
                </div>
                <div className="post-details-meta">
                  <div
                    dangerouslySetInnerHTML={{ __html: article.post_info }}
                  />
                </div>
                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  <UseSocialShare />
                </div>
              </div>
            </article>
          </div>
          {/* <div className="col-lg-4 col-md-8">
            <BlogSidebar />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsArea;
