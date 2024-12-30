import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FooterTwo from "@/layout/footer/footer-two";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TeamTwoArea from "@/components/team/team-v2-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import team_bg from "@/assets/images/media/Leadershipbanner.png";
import FooterOne from "@/layout/footer/footer-one";
import HeaderTwo from "@/layout/header/Header";
import TeamDetailsArea from "@/components/team/team-details-area";

export const metadata: Metadata = {
  title: "Leadership Team - IT Consulting Support | CGB Solutions",
  description : "Meet the experienced global IT services provider at CGB Solutions. Our leaders are committed to delivering exceptional IT solutions and driving business transformation for our clients.",
  keywords : "IT consulting, financial growth, insightful solutions",
};

const Leadership = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
            <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Leadership"
            subtitle="Meet Our Team: Redefining Leadership in IT Business Services"
            page="Leadership"
            // // shape={shape}
            bg_img={team_bg}
          />
          {/* breadcrumb end */}

          <TeamDetailsArea />
          

          {/* team v2 area start */}
          <TeamTwoArea />
          {/* team v2 area end */}

        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Leadership;
