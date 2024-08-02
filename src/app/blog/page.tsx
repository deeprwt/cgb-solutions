import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/BlogBanner.png";
import shape from "@/assets/images/shape/shape_34.svg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import BlogList from "@/components/dynamic/bloglist";

export const metadata: Metadata = {
  title: "Blog Page",
};

const BlogPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Blogs"
            subtitle=""
            page="Blog"
            bg_img={blog_bg}
            style_2={true}
            // // shape={shape}
          />
          {/* breadcrumb end */}

          {/* blog list area start */}
          {/* <BlogListArea /> */}
          <BlogList />
          {/* blog list area end */}

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

export default BlogPage;
