import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeroBannerThree from "@/components/hero-banner/hero-banner-three";
import BlockFeatureSix from "@/components/block-feature/block-feature-six";
import TextFeatureFour from "@/components/text-feature/text-feature-four";
import TextFeatureFive from "@/components/text-feature/text-feature-five";
import BlockFeatureSeven from "@/components/block-feature/block-feature-seven";
import FeedbackThree from "@/components/feedback/feedback-three";
import FancyBannerFour from "@/components/fancy-banner/fancy-banner-four";
import HomeThreeBlogs from "@/components/blogs/home-3-blogs";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterThree from "@/layout/footer/footer-three";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";

import about_bg from "@/assets/images/media/img_26.jpg";
import TwoColData from "@/components/two-col/two-col-data";
import MendixFeature from "@/components/solutions/mendix-feature";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import ParmanentStaffingSection from "@/components/solutions/parmanent-staffing-section";

export const metadata: Metadata = {
  title: "Permanent Staffing Solutions for Seamless Hiring | CGB Solutions",
  description : "Hire top permanent staff with CGB Solutions. We offer customized recruitment strategies to fulfill your talent needs quickly and effectively.",
  keywords : "permanent staffing, talent acquisition, recruitment, staffing solutions, hiring strategies, talent management, direct hire, workforce solutions, CGB Solutions, job placement services,staffing solutions,talent management,permanent recruitment,direct hire services,",
};

export default function PermanentStaffing() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne 
          title="Permanent Staffing Solutions"
          subtitle="Building Foundations: The Power of Permanent Staffing"
          page="Permanent Staffing Solutions"
          bg_img={about_bg}
          // // shape={shape}
          style_2={true}
          />
          {/* hero banner end */}

          <ParmanentStaffingSection />
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
