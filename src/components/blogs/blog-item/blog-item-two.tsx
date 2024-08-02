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

const BlogItemTwo: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="blog-meta-one mt-35 sm-mt-30 wow fadeInUp">
       <div className="post-data">
        <div className="post-info">
          <span className="fw-500 text-dark">{article.author} -</span>   {article.date.split(" ")[0]} {article.date.split(" ")[1]}
        </div>
        <Link href={`/article/${article.link}`} className="mt-15">
          <h4 className="tran3s blog-title">{article.title}</h4>
        </Link>
      </div>
      <figure
        className="post-img position-relative d-flex justify-content-end align-items-end m0"
        style={{ backgroundImage: `url(${article.imageUrl || article.image})`, height: "252px" }}
      >
        <Link href={`/article/${article.link}}`}
          className="round-btn stretched-link rounded-circle d-flex align-items-center justify-content-center tran3s"
        >
          <i className="bi bi-arrow-up-right"></i>
        </Link>
      </figure>
    </article>
  );
};

export default BlogItemTwo;
