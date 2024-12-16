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
import RPOSections from "@/components/solutions/rpo-section";

export const metadata: Metadata = {
  title: "Recruitment Process Outsourcing (RPO) | CGB Solutions",
  description : "CGB Solutions offers Recruitment Process Outsourcing (RPO) services to streamline your hiring process. Our tailored solutions ensure you find the right talent quickly.",
  keywords : "IT consulting, financial growth, insightful solutions",
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
          title="RPO"
          subtitle="Tailored Talent Acquisition with Recruitment Process Outsourcing Excellence"
          page="RPO"
          bg_img={about_bg}
          // // shape={shape}
          style_2={true}
          />
          {/* hero banner end */}

          <RPOSections />
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
