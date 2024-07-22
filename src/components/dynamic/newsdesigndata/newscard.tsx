import React from "react";
import Link from "next/link";

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

type NewsCardProps = {
  news: News;
  onDelete: (id: string) => void;
  onEdit: (news: News) => void; // Use the full News type
};

const NewsCard: React.FC<NewsCardProps> = ({ news, onDelete, onEdit }) => {
  if (!news.id) {
    return null; // Or some placeholder content
  }

  return (
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
      <figure
        className="post-img position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${news.imageUrl || news.image})`, height: "252px" }}
      >
        <Link href={`/news/${news.link}`} className="stretched-link date tran3s">
          {news.date.split(" ")[0]} {news.date.split(" ")[1]}
        </Link>
      </figure>
      <div className="post-data">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/news/${news.link}`} className="blog-title">
            <h4 style={{ fontSize: "23px" }}>{news.title}</h4>
          </Link>
          <div className="d-flex align-items-center">
            <button onClick={() => onEdit(news)} className="btn btn-primary me-2">
              Edit
            </button>
            <button onClick={() => onDelete(news.id!)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
