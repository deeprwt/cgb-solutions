import React from "react";
import Link from "next/link";

type ArticleCardProps = {
  article: {
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

const ArticleSidebar: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <>
      <article className="recent-news mb-4">
        <figure
          className="post-img"
          style={{
            backgroundImage: `url(${article.imageUrl || article.image})`,
          }}
        ></figure>
        <div className="post-data">
          <div className="date">{article.date.split(" ")[0]} {article.date.split(" ")[1]}</div>
          <Link href={`/article/${article.link}`} className="blog-title">
            <h3>{article.title}</h3>
          </Link>
        </div>
      </article>
      {/* <article className="blog-meta-two style-two mb-50 lg-mb-40">
        <figure
          className="post-img position-relative d-flex align-items-end m0"
          style={{
            backgroundImage: `url(${article.imageUrl || article.image})`,
            height: "252px",
          }}
        >
          <Link
            href={`/article/${article.link}`}
            className="stretched-link date tran3s"
          >
            {article.date.split(" ")[0]} {article.date.split(" ")[1]}
          </Link>
        </figure>
        <div className="post-data">
          <div className="post-info">{article.category}</div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <Link href={`/article/${article.link}`} className="blog-title">
              <h4 style={{ fontSize: "23px" }}>{article.title}</h4>
            </Link>
            <Link
              href={`/article/${article.link}`}
              className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
            >
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </article> */}
    </>
  );
};

export default ArticleSidebar;
