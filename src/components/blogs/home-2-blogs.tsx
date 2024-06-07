import React from "react";
import Link from "next/link";
import blog_data from "@/data/blog-data";
import article_data from "@/data/article-data";
import BlogItemTwo from "./blog-item/blog-item-two";

const HomeTwoBlogs = () => {
  // const blog_item = article_data.filter((b) => b.page === "blog-list");
  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };
  
  const blog_item = article_data
    .filter((b) => b.page === "blog-list")
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 3);  // Get the first 3 items
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
            {blog_item.map((b, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <BlogItemTwo blog={b} />
              </div>
            ))}
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

export default HomeTwoBlogs;
