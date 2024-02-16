import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import FooterTwo from "@/layout/footer/footer-two";
import BlogGridArea from "@/components/blogs/blog-grid-area";

export const metadata: Metadata = {
  title: "Blog Grid Page",
};

const BlogGridPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Explore our News"
            subtitle="Find the team members details here with all the information"
            page="Blog"
          />
          {/* breadcrumb end */}

          {/* blog grid area start */}
          <BlogGridArea />
          {/* blog grid area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterTwo />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogGridPage;
