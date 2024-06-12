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
import icon_4 from "@/assets/images/assets/ils_07.svg";
import CareerListArea from "@/components/career/career-list-area";
import CareerMainForm from "@/components/forms/career-main-form";
import ApplyNowBtn from "@/components/button/applynowbtn";


export const metadata: Metadata = {
  title: "Career",
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
          <ApplyNowBtn 
          />
           <CareerMainForm />

        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Career;
