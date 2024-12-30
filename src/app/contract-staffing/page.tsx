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

import about_bg from "@/assets/images/media/ContractStaffingbanner.png";
import TwoColData from "@/components/two-col/two-col-data";
import MendixFeature from "@/components/solutions/mendix-feature";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import SectionSol1 from "@/components/two-col/section-sol1";
import ContractStaffingSection from "@/components/solutions/contract-staffing-section";

export const metadata: Metadata = {
  title: "Contract Staffing Solutions India | CGB Solutions",
  description : "CGB Solutions offers flexible contract staffing solutions, providing skilled professionals to meet short-term business needs across industries. Hire top talent with ease.",
  keywords : "IT consulting, financial growth, insightful solutions",
};

export default function ContractStaffing() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne 
          title="Contract Staffing"
          subtitle="Expert contract staffing services to Enhance your IT solutions"
          page="Contract Staffing"
          bg_img={about_bg}
          // // shape={shape}
          style_2={true}
          />
          {/* hero banner end */}

          <ContractStaffingSection />
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
