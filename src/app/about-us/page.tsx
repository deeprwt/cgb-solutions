import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// import FooterThree from "@/layout/footer/footer-three";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/media/Aboutbanner.png";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_25.svg";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import BlockFeatureOne from "@/components/block-feature/block-feature-one";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import FeedbackOne from "@/components/feedback/feedback-one";
import PartnersSliderOne from "@/components/partners/partners-slider-one";
import TeamSectionThree from "@/components/team/team-section-three";
import HomeFourBlogs from "@/components/blogs/home-4-blogs";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import TextFeatureHome from "@/components/text-feature/text-feature-home";
import TextFeatureAbout from "@/components/text-feature/text-feature-about";
import BlockFeatureAbout from "@/components/block-feature/block-feature-about";
import DottedMap from "@/components/map/maps";
import HowWeDo from "@/components/home-data/how-we-do";
import logo_2 from "@/assets/images/logo/logome.png";

export const metadata: Metadata = {
  title: "About CGB Solutions | Leading IT Consulting and Business Solutions Provider",
  description : "At CGB Solutions, we specialize in innovative IT consulting, staffing, and business solutions. Our mission is to empower businesses with cutting-edge technology, ensuring exceptional service and success.",
  keywords : "IT consulting, business solutions, IT services provider, technology consulting, digital transformation, staff augmentation, custom IT solutions, IT staffing services, innovation in IT, IT strategy consulting, IT consulting for businesses, IT solutions for small businesses, enterprise IT services, technology consulting firms, professional IT consulting, digital business solutions, managed IT services, IT infrastructure solutions, business technology solutions, IT support services, IT consulting firm",
};

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="About Us"
            subtitle="Leading IT Service Provider Delivering Tailored IT Services for Business Excellence"
            page="About Us"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* breadcrumb end */}

          {/* text feature one area start */}
          <TextFeatureAbout />
          {/* text feature one area end */}

          {/* text feature one area start */}
          <TextFeatureAbout style_2={true} />
          {/* text feature one area end */}

          {/* <BlockFeatureAbout style_2={true}  /> */}

          {/* block feature one area start */}
          {/* <BlockFeatureOne style_2={true} /> */}
          {/* block feature one area end */}

          {/* text feature one area start */}
          {/* <TextFeatureThree style_2={true} /> */}
          {/* text feature one area end */}

          <BlockFeatureAbout style_2={true} />

          <HowWeDo />

          {/* feedback one start */}
          <FeedbackOne cls="top-border pt-80 pb-80" />
          {/* feedback one end */}

          {/* partner logo start */}
          <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <PartnersSliderOne />
            </div>
          </div>
          {/* partner logo end */}

          {/* team three start */}
          <TeamSectionThree />
          {/* team three end */}

          {/* <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <DottedMap />
            </div>
          </div> */}

          {/* blogs start */}
          {/* <HomeFourBlogs cls="mt-180 lg-mt-80 mb-180 lg-mb-80" /> */}
          {/* blogs end */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
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
                    {/* add tidio scritp for chat bot */}
                    <script src="//code.tidio.co/ohsdb1pchgfjw1yfgmpk8nx3haysxugt.js" async></script>
        {/* add tidio scritp for chat bot */}
    </Wrapper>
  );
};

export default AboutUsPage;
