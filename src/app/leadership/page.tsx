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
  title: "Meet the Leadership Team at CGB Solutions",
  description : "Explore the visionaries leading CGB Solutions, driving digital innovation and business growth through strategic leadership and expert consulting.",
  keywords : "leadership team, business leaders, digital transformation experts, IT consultants, leadership vision, CGB Solutions leadership, innovation leaders, tech leadership, executive team",
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
            title="Leadership Team"
            subtitle="Meet Our Team: Redefining Leadership in IT Business Services"
            page="Leadership Team"
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
