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
  title: "Our Trusted Partners in IT and Business Solutions | CGB Solutions",
  description : "Partnering with global technology leaders, CGB Solutions ensures top-tier IT and business services. Discover our strategic alliances and partnerships.",
  keywords : "technology partners, business partnerships, IT partnerships, strategic alliances, cloud technology partners, business service providers, CGB Solutions partners, IT vendor solutions",
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
            title="Partners and Alliances"
            subtitle="Strategic Partners: Innovating with Leading Global IT Consulting Services"
            page="Partners and Alliances"
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

