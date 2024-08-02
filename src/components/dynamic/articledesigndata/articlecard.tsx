import React from "react";
import Link from "next/link";

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
  draft: boolean; // Add this line
};

type ArticleCardProps = {
  article: Article;
  onDelete: (id: string) => void;
  onEdit: (article: Article) => void; // Use the full Article type
  onToggleDraftStatus: (id?: string, currentDraftStatus?: boolean) => void;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onDelete,
  onEdit,
  onToggleDraftStatus,
}) => {
  if (!article.id) {
    return null; // Or some placeholder content
  }

  return (
    // <article className="blog-meta-two style-two mb-50 lg-mb-40">
    //   <figure
    //     className="post-img position-relative d-flex align-items-end m0"
    //     style={{ backgroundImage: `url(${article.imageUrl || article.image})`, height: "252px" }}
    //   >
    //     <Link href={`/article/${article.link}`} className="stretched-link date tran3s">
    //       {article.date.split(" ")[0]} {article.date.split(" ")[1]}
    //     </Link>
    //   </figure>
    //   <div className="post-data">
    //     <div className="d-flex justify-content-between align-items-center flex-wrap">
    //       <Link href={`/article/${article.link}`} className="blog-title">
    //         <h4 style={{ fontSize: "23px" }}>{article.title}</h4>
    //       </Link>
    //       <div className="d-flex align-items-center">
    //         <button onClick={() => onEdit(article)} className="btn btn-primary me-2">
    //           Edit
    //         </button>
    //         <button onClick={() => onDelete(article.id!)} className="btn btn-danger">
    //           Delete
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </article>
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
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
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/article/${article.link}`} className="blog-title">
            <h4 style={{ fontSize: "23px" }}>{article.title}</h4>
          </Link>
          <div className="d-flex align-items-center">
            <button
              onClick={() => onEdit(article)}
              className="btn btn-primary me-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(article.id!)}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => onToggleDraftStatus(article.id, article.draft)}
            >
              {article.draft ? "Undraft" : "Draft"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
