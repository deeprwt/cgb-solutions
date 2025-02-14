import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FooterTwo from "@/layout/footer/footer-two";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TeamTwoArea from "@/components/team/team-v2-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import team_bg from "@/assets/images/media/img_32.jpg";
import FooterOne from "@/layout/footer/footer-one";
import HeaderTwo from "@/layout/header/Header";
import CareerListArea from "@/components/career/career-list-area";
import CareerSection from "@/components/solutions/career-section";


export const metadata: Metadata = {
  title:
    "Careers | CGB Solutions",
  description:
    "CGB Solution, a leading IT services and Business Management Consultant company, offers cutting-edge IT solutions and Business consulting to drive efficiency and success for your business.",
  keywords:
    "IT services, IT support, IT company,IT solutions,IT consulting,IT services company,IT consulting companies,IT support companies,IT solutions company,IT consulting services, Integrated technology services,Top IT companies,Best IT company IT business solutions,Strategic technology solutions,IT outsourcing company,IT solutions provider,IT consulting firm ,IT services provider ,IT support services ,IT solutions and services ,IT services and solutions ,IT support and services,IT services for small business ,IT solutions for businesses,IT consulting for enterprises ,IT solutions and services,IT services and solutions,IT support and services,IT services for small businesses,IT solutions for businesses,digital transformation services,technology solutions,business management consultant,software company in India,it services & consulting,IT consulting for enterprises ,",
};

const Career = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
            <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Career Opportunity"
            subtitle="Meet our experts, guiding you"
            page="Career"
            // // shape={shape}
            bg_img={team_bg}
          />
          {/* <CareerListArea /> */}
          <CareerSection />

        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Career;
