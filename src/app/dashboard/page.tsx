'use client';
import React from "react";
// import { Metadata } from "next";
import withAuth from "@/components/hoc/withAuth";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// import FooterThree from "@/layout/footer/footer-three";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/media/Aboutbanner.png";


// export const metadata: Metadata = {
//   title: "About Us",
//   description : "Unlock financial growth with CGB Solutions experienced IT consulting & insightful solutions. Navigate your journey with us!",
//   keywords : "IT consulting, financial growth, insightful solutions",
// };

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="About Us"
            subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
            page="About Us"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* breadcrumb end */}

          <div>Welcome to the Dashboard Home!</div>;
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default  withAuth(Dashboard);
