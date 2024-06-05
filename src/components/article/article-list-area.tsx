'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import article_data from "../../data/article-data";
import quote from "@/assets/images/icon/icon_93.svg";
import ArticleListItem from "./article-item/article-list-item";
import usePagination from "@/hooks/use-pagination";
import { IArticle } from "@/types/article-d-t";
import Pagination from "@/ui/pagination";

const ArticleListArea = () => {
  const blog_items = article_data.filter((b) => b.page === "blog-list") .reverse();
  const {currentItems,handlePageClick,pageCount} = usePagination<IArticle>(blog_items,4);
  return (
    <div className="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
    <div className="container">
      <div className="position-relative">
        <div className="row gx-xxl-5">
          {currentItems?.map((b, i) => (
            <div key={i} className="col-md-4">
              <ArticleListItem blog={b} />
            </div>
          ))}
        </div>
        <div className="pagination-one mt-20">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>
    </div>
  </div>
  );
};
export default ArticleListArea;

