import React from "react";
import Link from "next/link";

type BlogCardProps = {
  blog: {
    id?: string;
    image: string;
    imageUrl?: string;
    date: string;
    title: string;
    author: string;
    category: string;
    link: string;
    post_info: string;
  };
};

const BlogWebsiteCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
      <figure
        className="post-img position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${blog.imageUrl || blog.image})` }}
      >
        <Link href={`/blog/${blog.link}`} className="stretched-link date tran3s">
          {blog.date.split(" ")[0]} {blog.date.split(" ")[1]}
        </Link>
      </figure>
      <div className="post-data">
        <div className="post-info">{blog.category}</div>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/blog/${blog.link}`} className="blog-title">
            <h4>{blog.title}</h4>
          </Link>
          <Link href={`/blog/${blog.link}`} className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogWebsiteCard;
