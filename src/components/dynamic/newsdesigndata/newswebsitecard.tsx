import React from "react";
import Link from "next/link";

type NewsCardProps = {
  news: {
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

const NewsWebsiteCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <article className="blog-meta-two mb-80 lg-mb-50 wow fadeInUp"
    data-wow-delay="0.1s"
    >
      <figure
        className="post-img rounded-5 position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${news.imageUrl || news.image})`}}
      >
        <Link href={`/news-media/${news.link}`} className="stretched-link rounded-5 date tran3s">
          {news.date.split(" ")[0]} {news.date.split(" ")[1]}
        </Link>
      </figure>
      <div className="post-data">
        {/* <div className="post-info">{news.category}</div> */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/news-media/${news.link}`} className="blog-title">
            <h4 style={{ fontSize: "23px" }}>{news.title}</h4>
          </Link>
          <Link href={`/news-media/${news.link}`}
            className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
          >
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
        <div className="post-info">{news.category}</div>
      </div>
    </article>
  );
};

export default NewsWebsiteCard;
