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
import about_bg from "@/assets/images/media/Mendixbanner.png";
import TwoColData from "@/components/two-col/two-col-data";
import MendixFeature from "@/components/solutions/mendix-feature";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import screen from "@/assets/images/solutions/mendix/faq.jpg";
import SectionSol1 from "@/components/two-col/section-sol1";
import ContactForm from "@/components/forms/contact-form";
import icon_4 from "@/assets/images/assets/ils_07.svg";

export const metadata: Metadata = {
  title: "Mendix Solutions: Low-Code Application Development Platform",
  description : "Find the right Mendix solution for your business needs. Explore our platform, services, and partner ecosystem.",
  keywords : "Mendix low-code platform,Mendix, low-code development, app development, agile apps, enterprise solutions, CGB Solutions, Mendix platform, app automation, rapid development, digital transformation,Low-code development platform,Low-code development platform,Low-code solutions,Mendix app development,Low-code solutions,Mendix for business solutions,Build apps with Mendix,Smart Automation,",
};

export default function Mendix() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne
            title="Mendix Application Development Solutions"
            subtitle="Optimize your application development with Mendix using strategic IT consulting solutions."
            page="Mendix Application Development Solutions"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* hero banner end */}

          {/* Start */}
          {/* <TwoColData /> */}
          {/* end */}

          {/* start */}
          <MendixFeature />
          {/* end */}

          {/* start */}

          {/* end */}

          <SectionSol1 />

          {/* start */}
          <FaqSolutions
            title="Why use Mendix for businesses?"
            img={screen}
            page="mendixfaq"
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
                    {/* add tidio scritp for chat bot */}
                    <script src="//code.tidio.co/ohsdb1pchgfjw1yfgmpk8nx3haysxugt.js" async></script>
        {/* add tidio scritp for chat bot */}
    </Wrapper>
  );
}
