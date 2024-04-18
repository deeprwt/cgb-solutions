import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import FaqArea from "@/components/faq/faq-area";
import AdminLogin from "@/components/adminform/adminlogin";

export const metadata: Metadata = {
  title: "Admin login",
};

const Login = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <AdminLogin />
      </div>
    </Wrapper>
  );
};

export default Login;
