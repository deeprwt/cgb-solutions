import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/ArticleBanner.png";
import shape from "@/assets/images/shape/shape_34.svg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import BlogList from "@/components/dynamic/bloglist";
import ArticleList from "@/components/dynamic/articledesigndata/articlelist";

export const metadata: Metadata = {
  title: "Expert Articles on IT Solutions & Business Trends | CGB Solutions",
  description : "Dive into expert-written articles on IT solutions, business strategies, and emerging trends that shape the future of digital transformation.",
  keywords : "IT solutions articles, business strategies, technology trends, digital transformation articles, business insights, software solutions, CGB Solutions articles, IT consulting, technology innovations",
};

const ArticlePage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Article"
            subtitle="Driving Operational Efficiency with Our Expert IT Solution Company"
            page="Article"
            bg_img={blog_bg}
            style_2={true}
            // // shape={shape}
          />
          {/* breadcrumb end */}

          {/* blog list area start */}
          {/* <ArticleListArea /> */}
          {/* blog list area end */}
          {/* <BlogList /> */}
          <ArticleList />

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          {/* <NewsletterBanner /> */}
          {/* news letter end */}
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
