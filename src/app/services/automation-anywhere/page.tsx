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

import about_bg from "@/assets/images/media/Automationbanner.png";
import TwoColData from "@/components/two-col/two-col-data";
import MendixFeature from "@/components/solutions/mendix-feature";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import SectionSol1 from "@/components/two-col/section-sol1";
import AutomationAnywhereSecton from "@/components/solutions/automation-anywhere-section";
import screen from "@/assets/images/solutions/automation/faq.jpg";
import ContactForm from "@/components/forms/contact-form";
import icon_4 from "@/assets/images/assets/ils_07.svg";


export const metadata: Metadata = {
  title: "Automation Anywhere Solutions for Business Efficiency | CGB Solutions",
  description : "Leverage Automation Anywhere to streamline business processes and enhance efficiency. Discover intelligent automation solutions with CGB Solutions.",
  keywords : "automation solutions, intelligent automation, business automation, process automation, CGB Solutions, automation software, enterprise automation, Robotic Process Automation (RPA), digital transformation, workflow automation",
};

export default function AutomationAnywhere() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne 
          title="Automation Anywhere Solutions"
          subtitle="Unlock business growth with Automation Anywhere guided by top-tier IT consulting services."
          page="Automation Anywhere Solutions"
          bg_img={about_bg}
          // // shape={shape}
          style_2={true}
          />
          {/* hero banner end */}

          {/* Start */}
         
          {/* end */}

          {/* start */}
         
          {/* end */}
            <AutomationAnywhereSecton/>
          {/* start */}
          <FaqSolutions
            title="Why use Automation Anywhere for businesses?"
            img={screen}
            page="automationsfaq"
          />
          {/* end */}

          {/* <SectionSol1 /> */}



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
                    {/* add tidio scritp for chat bot */}
                    <script src="//code.tidio.co/ohsdb1pchgfjw1yfgmpk8nx3haysxugt.js" async></script>
        {/* add tidio scritp for chat bot */}
    </Wrapper>
  );
}
