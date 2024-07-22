import React from "react";
import Link from "next/link";

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

type BlogCardProps = {
  blog: Blog;
  onDelete: (id: string) => void;
  onEdit: (blog: Blog) => void; // Use the full Blog type
};

const BlogCard: React.FC<BlogCardProps> = ({ blog, onDelete, onEdit }) => {
  if (!blog.id) {
    return null; // Or some placeholder content
  }

  return (
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
      <figure
        className="post-img position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${blog.imageUrl || blog.image})`, height: "252px" }}
      >
        <Link href={`/article/${blog.link}`} className="stretched-link date tran3s">
          {blog.date.split(" ")[0]} {blog.date.split(" ")[1]}
        </Link>
      </figure>
      <div className="post-data">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/article/${blog.link}`} className="blog-title">
            <h4 style={{ fontSize: "23px" }}>{blog.title}</h4>
          </Link>
          <div className="d-flex align-items-center">
            <button onClick={() => onEdit(blog)} className="btn btn-primary me-2">
              Edit
            </button>
            <button onClick={() => onDelete(blog.id!)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
