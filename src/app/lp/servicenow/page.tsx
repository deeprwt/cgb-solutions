import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeroBannerThree from "@/components/hero-banner/hero-banner-three";
import BlockFeatureSix from "@/components/block-feature/block-feature-six";
import TextFeatureFour from "@/components/text-feature/text-feature-four";
import TextFeatureFive from "@/components/text-feature/text-feature-five";
import BlockFeatureSeven from "@/components/block-feature/block-feature-seven";
import FeedbackThree from "@/components/feedback/feedback-three";
import FancyBannerFour from "@/components/fancy-banner/fancy-banner-four";
import HomeThreeBlogs from "@/components/blogs/home-3-blogs";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterThree from "@/layout/footer/footer-three";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import Image from "next/image";
import about_bg from "@/assets/images/media/ServiceNowbanner.png";
import TwoColData from "@/components/two-col/two-col-data";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import SectionSol1 from "@/components/two-col/section-sol1";
import screen from "@/assets/images/solutions/servicenow/faq.jpg";
import ServicenNowSecton from "@/components/solutions/servicenow-section";
import ContactForm from "@/components/forms/contact-form";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import HeroBannerFive from "@/components/hero-banner/hero-banner-five";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import Header from "@/layout/header/Header";
import ServicenNowlpsection from "@/components/ladingpage/servicenow-page";
import PartnersSliderOne from "@/components/partners/partners-slider-one";
import icon_1 from "@/assets/images/icon/icon_90.svg";

export const metadata: Metadata = {
  title:
    "ServiceNow Consulting & Implementation | CGB Solutions",
  description:
    "Boost IT efficiency with CGB Solutions’ ServiceNow consulting, implementation, and managed services. Trusted partner for ITSM, ITOM, HRSD & automation.",
  keywords:
    "ServiceNow Partner, ServiceNow Consulting, ServiceNow Implementation, ServiceNow Integration, ServiceNow Managed Services, ServiceNow ITSM, ServiceNow ITOM, ServiceNow HR Service Delivery, ServiceNow CSM, ServiceNow GRC, ServiceNow Automation, ServiceNow Cloud Migration, ServiceNow Low-Code Apps, ServiceNow AI Workflows, ServiceNow Workflow Automation, ServiceNow Support Services, ServiceNow Digital Transformation, ServiceNow Platform Solutions, ServiceNow Enterprise Solutions, ServiceNow Process Optimization.",
};

export default function ServiceNow() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* <HeaderTwo /> */}
        <Header cls="dark-header" />
        {/* header end */}
        <main>
          {/* <HeroBannerFour />
            <HeroBannerFive />
            <HeroBannerOne />
            <HeroBannerTwo /> */}
          <HeroBannerSix />
          <div className="row">
            <div className="col-12">
              <div className="partner-logo-one pt-60 md-pt-50">
                <PartnersSliderOne />
              </div>
            </div>
          </div>
          {/* hero banner start */}
          {/* <BreadcrumbOne
            title="ServiceNow"
            subtitle="Automate workflows and service management with expert ServiceNow consulting services"
            page="ServiceNow"
            bg_img={about_bg}
            style_2={true}
          /> */}
          {/* hero banner end */}

          {/* Start */}

          {/* end */}

          {/* start */}
          <ServicenNowlpsection />
          {/* end */}

          {/* start */}
          <FaqSolutions
            title="Why use ServiceNow for businesses?"
            img={screen}
            page="serviceNow"
            cls="mt-150 mb-40 lg-mt-120 md-mt-80"
          />
          {/* end */}

          {/* block feature six start */}
          {/* <BlockFeatureSix /> */}
          {/* block feature six end */}

          {/* text feature four start */}
          {/* <TextFeatureFour /> */}
          {/* text feature four end */}

          {/* text feature five start */}
          {/* <TextFeatureFive /> */}
          {/* text feature five end */}

          {/* block feature seven start */}
          {/* <BlockFeatureSeven /> */}
          {/* block feature seven end */}

          {/* feedback three start */}
          {/* <FeedbackThree /> */}
          {/* feedback three end */}

          {/* fancy banner four start */}
          {/* <FancyBannerFour /> */}
          {/* fancy banner four end */}

          {/* blog item start */}
          {/* <HomeThreeBlogs /> */}
          {/* blog item end */}
          <div className="contact-us-section pt-80 pb-80 lg-pt-80" id="contact"  style={{background:"#E3F0FF"}}> 
            <div className="container">
              <div className="position-relative">
                <div className="bg-wrapper light-bg mt-80 lg-mt-40 service-details" style={{padding:"0px"}}>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="d-flex flex-column flex-lg-column-reverse form-section-style">
                        <div className="title-one text-center text-lg-start  details-meta">
                          <h3>Let&apos;s Transform Your Business Together</h3>
                          <p>
                            Your Trusted IT Solutions & Business Consulting
                            Partner
                          </p>
                          <ul className="list-none">
                            <li>
                              <h4
                                className="fw-bold mt-2 mb-2 text-capitalize"
                                style={{ color: "#012d50" }}
                              >
                                <span className="pr-3">
                                  <i className="bi icon-color bi-trophy"></i>
                                </span>
                                15+ Years of Expertise
                              </h4>
                              <p>
                                We specialize in delivering complex IT and
                                business solutions with precision and speed.
                              </p>
                            </li>
                            <li>
                              <h4
                                className="fw-bold mt-2 mb-2 text-capitalize"
                                style={{ color: "#012d50" }}
                              >
                                <span className="pr-3">
                                  <i className="bi icon-color bi-globe-americas"></i>
                                </span>
                                200+ Clients Across Industries
                              </h4>
                              <p>
                                From high-growth startups to global enterprises
                                — we’ve powered every stage of digital growth.
                              </p>
                            </li>
                            <li>
                              <h4
                                className="fw-bold mt-2 mb-2 text-capitalize"
                                style={{ color: "#012d50" }}
                              >
                                <span className="pr-3">
                                  <i className="bi icon-color bi-person-workspace"></i>
                                </span>
                                75+ Certified Experts In-House
                              </h4>
                              <p>
                                Top 1% talent delivering Microsoft Power
                                Platform, Dynamics 365, ServiceNow, OutSystems,
                                and more.
                              </p>
                            </li>
                            <li>
                              <h4
                                className="fw-bold mt-2 mb-2 text-capitalize"
                                style={{ color: "#012d50" }}
                              >
                                <span className="pr-3">
                                  <i className="bi icon-color bi-rocket-takeoff"></i>
                                </span>
                                End-to-End Business & IT Consulting
                              </h4>
                              <p>
                                We don’t just deliver tech — we build scalable
                                strategies that drive measurable results.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="form-style-one ps-xl-5 p-4">
                        <h3 className="font-weight-bolder" style={{fontWeight:"700"}}>Book Your Free Consultation</h3>
                        <p>
                          Get a Response Within 24 Business Hours — Guaranteed
                        </p>
                        {/* form start */}

                        <ContactForm />
                        {/* form end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
