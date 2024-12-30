import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import service_bg from "@/assets/images/media/partnersbanner.png";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_27.svg";
import ServiceDetailsArea from "@/components/services/service-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import AwardsSection from "@/components/company/awards-section";
import RecognitionSection from "@/components/company/recognition-section";
import PartnersSection from "@/components/company/partners-section";


export const metadata: Metadata = {
  title: "Our Partners - Global IT Consulting | CGB Solutions",
  description : "CGB Solutions collaborates with industry-leading partners to deliver cutting-edge IT solutions. Explore our strategic partnerships that enhance innovation and client success.",
  keywords : "IT consulting, financial growth, insightful solutions",
};

export default function Partners() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Partners"
            subtitle="Strategic Partners: Innovating with Leading Global IT Consulting Services"
            page="Partners"
            // // shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* service details area start */}
            <PartnersSection />
          {/* service details area end */}

        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

