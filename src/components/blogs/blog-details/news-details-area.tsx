import React from "react";
import BlogDetailsCommentArea from "./blog-details-comment-area";
import Image from "next/image";
import Link from "next/link";
// internal
import BlogSidebar from "../blog-sidebar";
import blog_1 from "@/assets/images/blog/blog_img_08.jpg";
import blog_2 from "@/assets/images/blog/blog_img_16.jpg";
import blog_3 from "@/assets/images/blog/blog_img_17.jpg";
import icon from "@/assets/images/icon/icon_93.svg";
import BlogDetailsForm from "@/components/forms/blog-details-form";
// import { IBlog } from "@/types/blog-d-t";
import { IArticle } from "@/types/article-d-t";
import UseSocialShare from "@/components/socail-media/socialshare";

const NewsDetailsArea = ({ blog }: { blog: IArticle }) => {
  const { date, title, post_info, img, content } = blog || {};
  return (
    <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${img.src})` }}
              >
                <div className="date">{date}</div>
              </figure>
              <div className="post-data">
                <div className="post-info">{post_info}</div>
                <div className="blog-title">
                  <h4>{title}</h4>
                </div>
                <div className="post-details-meta">
                  {/* Rendering content headings and paragraphs dynamically */}
                  {content.map((item, index) => (
                    <div key={index}>
                      {item.subimg && (
                        <img
                          src={item.subimg.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraphfirst && <p>{item.paragraphfirst}</p>}
                      {item.heading && <h4>{item.heading}</h4>}
                      {item.subimg0 && (
                        <img
                          src={item.subimg0.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paradesc && <h5>{item.paradesc}</h5>}
                      {item.subimg1 && (
                        <img
                          src={item.subimg1.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph && <p>{item.paragraph}</p>}
                      {item.subimg2 && (
                        <img
                          src={item.subimg2.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph2 && <p>{item.paragraph2}</p>}
                      {item.subimg2 && (
                        <img
                          src={item.subimg2.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph3 && <p>{item.paragraph3}</p>}
                      {item.subimg3 && (
                        <img
                          src={item.subimg3.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph4 && <p>{item.paragraph4}</p>}
                      {item.subimg4 && (
                        <img
                          src={item.subimg4.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph5 && <p>{item.paragraph5}</p>}
                      {item.subimg5 && (
                        <img
                          src={item.subimg5.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph6 && <p>{item.paragraph6}</p>}
                      {item.subimg6 && (
                        <img
                          src={item.subimg6.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph7 && <p>{item.paragraph7}</p>}
                      {item.subimg7 && (
                        <img
                          src={item.subimg7.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph9 && <p>{item.paragraph9}</p>}
                      {item.subimg9 && (
                        <img
                          src={item.subimg9.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.paragraph10 && <p>{item.paragraph10}</p>}
                      {item.subimg10 && (
                        <img
                          src={item.subimg10.src}
                          alt="what's new"
                          className="w-100 h-100 mb-30 mt-30 shadowimg cursor-pointer rounded-1"
                        />
                      )}
                      {item.endingbold && <h4>{item.endingbold}</h4>}
                      {/* <ul className="style-none list-item pb-20">
                        <li className="lim">
                          {item.ul.li}
                        </li>
                      </ul> */}
                    </div>
                  ))}
                  {/* End of content rendering */}
                  {/* <div className="quote-wrapper">
                    <div className="wrapper">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <Image src={icon} alt="icon" className="lazy-img" />
                      </div>
                      <div className="row">
                        <div className="col-xxl-9 col-xl-11 m-auto">
                           <h3>
                            Grow wealth like a tree, roots in savings, branches
                            reaching toward diverse investments.
                          </h3> 
                        </div>
                      </div>
                       <h6>
                        Sindhu BRJ <span>CEO CGB Solutions</span>
                      </h6> 
                    </div>
                  </div> */}
                </div>
                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  {/* <ul className="d-flex align-items-center tags style-none pt-20">
                    <li>Tag:</li>
                    <li>
                      <Link href="#">Finance</Link>
                    </li>
                    <li>
                      <Link href="#">Loan</Link>
                    </li>
                    <li>
                      <Link href="#">Banking</Link>
                    </li>
                  </ul> */}
                  {/* social media sharing link start  */}
                  <UseSocialShare />
                  {/* social media sharing link end  */}
                </div>
              </div>
            </article>
            {/* blog comment area start */}
            {/* <BlogDetailsCommentArea /> */}
            {/* blog comment area end */}
            {/* <div className="blog-comment-form grey-bg">
              <h3 className="blog-inner-title">Add Your Comments</h3>
              <p>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  className="text-decoration-underline fw-500"
                >
                  Sign in
                </a>{" "}
                to post your comment or signup if you do not have any account.
              </p>
              <BlogDetailsForm/>
            </div> */}
          </div>

          <div className="col-lg-4 col-md-8">
            {/* blog sidebar start */}
            <BlogSidebar />
            {/* blog sidebar end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsArea;
