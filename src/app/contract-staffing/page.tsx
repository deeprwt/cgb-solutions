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
  title: "Workforce Solutions and Contract Staffing Services | CGB Solutions",
  description : "Optimize your workforce with CGB Solutions' contract staffing services. Our flexible staffing strategies and workforce management consulting provide skilled temporary talent to meet your business needs.",
  keywords : "Contract Staffing,workforce solutions, staffing Staffing Solutions,Workforce Management,Temporary Staffing,Temporary Staffing,Workforce Management Consulting,Hire-Train-Deploy Services,IT Talent Acquisition,IT Contract Staffing Services,contract staffing solutions, hire-train-deploy services, workforce management consulting, recruitment process outsourcing, flexible staffing strategies, skill gap bridging, IT talent acquisition, permanent staffing solutions, employment lifecycle optimization, scalable recruitment models",
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
          title="Contract Staffing Services"
          subtitle="Expert contract staffing services to Enhance your IT solutions"
          page="Contract Staffing Services"
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
