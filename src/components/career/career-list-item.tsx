import React from "react";
// import { IBlog } from "@/types/blog-d-t";
import { IArticle } from "@/types/article-d-t";
import { ICareer } from "@/types/career-d-t";
import Link from "next/link";

const CareerListItem = ({ blog }: { blog: ICareer }) => {
  // add - after every words present in title 
  const hyphen = "-";
  // const dynamiclink = blog.link.split(' ').join(hyphen);
  const dynamiclink = blog.link.toLowerCase().split(' ').join(hyphen);

  return (
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
        
      <figure
        className="position-relative d-flex align-items-end m0"
        // style={{ backgroundImage: `url(${blog.img.src})`, height: "252px" }}
      >
        <Link href={`/career/${dynamiclink}`} className="stretched-link date tran3s">
        {/* {blog.date.split(" ")[0]} {blog.date.split(" ")[1]} */}
        <img src={blog.img.src} alt="background image"  />
        </Link>
      </figure>
      <div className="post-data">
        <div className="post-info d-flex justify-content-between"><span>{blog.post_info}</span> <span>   {blog.date.split(" ")[0]} {blog.date.split(" ")[1]}</span></div>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/career/${dynamiclink}`} className="blog-title" style={{width:"100%"}}>
            <h4 style={{
              fontSize: "23px"
            }}>{blog.title}</h4>
          </Link>
          {/* <Link href={`/career/${dynamiclink}`}
            className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
          >
            <i className="bi bi-arrow-up-right"></i>
          </Link> */}
        </div>
        {/* <div className="post-info pt-2 d-flex justify-content-between">{blog.desc}</div> */}
        <p>{blog.desc}</p>
        <Link href={`/career/${dynamiclink}`}
            className="d-flex align-items-center justify-content-center tran3s btn-one"
            style={{fontWeight:"500"}}
          >
            Read More
            {/* <i className="bi bi-arrow-up-right"></i> */}
          </Link>
      </div>
    </article>
  );
};

export default CareerListItem;
