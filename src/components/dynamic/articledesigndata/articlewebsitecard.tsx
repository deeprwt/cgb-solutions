import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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

const ArticleWebsiteCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
      {/* <figure
        className="post-img position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${article.imageUrl || article.image})`, height: "252px" }}
      >
        <Link href={`/article/${article.link}`} className="stretched-link date tran3s">
          {article.date.split(" ")[0]} {article.date.split(" ")[1]}
        </Link>
      </figure> */}
      <Link href={`/article/${article.link}`} className="date tran3s w-100">
        <Image
          src={article.imageUrl || article.image}
          alt={article.title || "Article Image"}
          layout="responsive"
          width={600}
          height={400}
          className="lazy-img me-auto ms-auto"
        />
      </Link>
      <div className="post-data">
        <div className="post-info d-flex justify-content-between align-items-center">
          <span>{article.category} </span>{" "}
          <span className="articledate">
            {article.date.split(" ")[0]} {article.date.split(" ")[1]}
          </span>
        </div>
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
    </article>
  );
};

export default ArticleWebsiteCard;
