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
  title: "Articles | IT Solutions & Business Trends | CGB Solutions",
  description : "Read articles from CGB Solutions on IT solutions, industry developments, and business technology trends. Learn how to transform your business with our expertise.",
  keywords : "IT consulting, financial growth, insightful solutions",
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
            subtitle="The Ultimate Guide to the IT Consulting Process for Businesses."
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
