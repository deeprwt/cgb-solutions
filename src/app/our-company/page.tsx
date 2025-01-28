import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import service_bg from "@/assets/images/media/OurCompanybanner.png";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_27.svg";
import ServiceDetailsArea from "@/components/services/service-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import Company from "@/components/services/company";
import OurStorySection from "@/components/company/ourstory-section";
import MissionSection from "@/components/company/mission-section";
import OurCompanySection from "@/components/company/our-company-section";

export const metadata: Metadata = {
  title: "CGB Solutions: Drive Business Growth with Expert Consulting",
  description : "Discover CGB Solutions, a global IT consulting firm offering innovative business solutions, digital transformation, and technology expertise across industries. Learn more.",
  keywords : "IT consulting services, digital transformation, global IT solutions, business consulting, technology services, IT strategy, business solutions, cloud solutions, software development, tech consulting",
};

export default function OurCompany() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Company"
            subtitle="Empowering enterprises through cutting-edge IT services."
            page="Our Company"
            // // shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* service details area start */}
          <OurCompanySection />
          {/* service details area end */}
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
