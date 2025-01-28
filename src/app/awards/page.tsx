import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_27.svg";
import ServiceDetailsArea from "@/components/services/service-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import AwardsSection from "@/components/company/awards-section";


export const metadata: Metadata = {
  title: "Industry Awards & Recognition | CGB Solutions | Excellence in IT Consulting",
  description : "CGB Solutions has earned multiple industry awards for excellence in IT consulting and digital services. Discover our commitment to quality and customer satisfaction.",
  keywords : "IT consulting awards, industry recognition, CGB Solutions awards, excellence in IT, digital services recognition, best IT consulting, industry leadership, award-winning IT services, technology solutions awards, customer satisfaction awards, innovation in IT, technology excellence, consulting awards, CGB Solutions recognition, top IT firm, IT industry leaders, prestigious awards, tech consulting achievements, award-winning solutions, technology excellence awards, IT services accolades.",
};

export default function Mission() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Awards and Achievements"
            subtitle="Offering solutions & services to address a spectrum of financial issues"
            page="Awards and Achievements"
            // // shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* service details area start */}
          <AwardsSection />
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

