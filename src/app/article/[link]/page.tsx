import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import blog_bg from "@/assets/images/media/img_32.jpg";
import ArticleDetailsArea from "@/components/article/article-details/article-details-area";
import article_data from "@/data/article-data";
import FooterOne from "@/layout/footer/footer-one";

export const metadata: Metadata = {
  title: "Article page data",
};

const ArticlePage = ({ params }: { params: { link: string } }) => {
  const article = article_data.find((b) => (b.link) === (params.link))!;
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Single Blog Details"
            subtitle="Meet our experts, guiding you through financial intricacies with precision"
            page="Blog"
            bg_img={blog_bg}
            style_2={true}
            // // shape={shape}
          />
          {/* breadcrumb end */}

          {/* blog details area start */}
          {article ? (
            <ArticleDetailsArea blog={article} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any blog this name {params.link}</h3>
              </div>
            </div>
          )}
          {/* blog details area end */}

        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ArticlePage;
