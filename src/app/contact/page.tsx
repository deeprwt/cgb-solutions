"use client"
import React from "react";
// import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ContactArea from "@/components/contact/contact-area";
import FooterThree from "@/layout/footer/footer-three";
import shape from "@/assets/images/shape/shape_33.svg";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import DottedMap from "@/components/map/maps";
import DefaultMaps from "@/components/map/maps1";

// export const metadata: Metadata = {
//   title: "Contact Page",
// };

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Contact us for inquiries"
            subtitle="Get our all info and also can message us directly from here"
            page="Contact"
            // shape={shape}
          />
          {/* breadcrumb end */}

          {/* contact area start */}
           <ContactArea />
          <div className="text-center ">

          <DefaultMaps/>
          </div>
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ContactPage;
