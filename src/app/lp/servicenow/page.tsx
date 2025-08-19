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
    "ServiceNow Consulting | IT Service Management Simplified with CGB Solutions",
  description:
    "Optimize workflows and IT operations with CGB Solutions' ServiceNow consulting services, from implementation to customization for seamless efficiency.",
  keywords:
    "ServiceNow solutions, IT automation,ServiceNow consulting services, IT process optimization, ServiceNow ITSM implementation, workflow automation experts, customized IT solutions, IT service management software, ServiceNow cloud solutions, automated IT processes, ServiceNow module customization, digital service optimization,ServiceNow consulting, ServiceNow implementation, IT service management, ITSM consulting, ServiceNow solutions, workflow automation, ServiceNow customization, ServiceNow optimization, IT workflows, IT operations, enterprise IT management, ServiceNow integrations, ServiceNow platform solutions, process efficiency tools, IT workflow automation, IT service solutions, advanced ITSM, business automation tools, scalable ServiceNow solutions, enterprise ServiceNow services, ServiceNow implementation strategy, process optimization tools, IT efficiency solutions, ServiceNow enterprise tools, ServiceNow workflow management, streamlined IT operations.",
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
          <div className="contact-us-section pt-80 pb-80 lg-pt-80" id="contact">
            <div className="container">
              <div className="position-relative">
                <div className="bg-wrapper light-bg mt-80 lg-mt-40">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="d-flex flex-column flex-lg-column-reverse">
                        <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                          <h2>Let&apos;s Start</h2>
                          <p>Initiating Your Journey to Success and Growth.</p>
                          <ul className="list-none">
                            <li><span className="px-3"><i className="bi dark-green bi-bookmarks-fill"></i></span><span>Book a Free Consultation</span></li>
                            <li><span className="px-3"><i className="bi dark-green bi-telephone-forward-fill"></i></span><span>Request a Call Back</span></li>
                            <li><span className="px-3"><i className="bi dark-green bi-calendar-check-fill"></i></span><span>Schedule a Demo</span></li>
                          </ul>

                          <div className="address-block-one mb-40">
                            {/* <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                              <Image
                                src={icon_1}
                                alt="icon"
                                className="lazy-img"
                              />
                            </div> */}
                            <h5 className="title">CGB Solutions</h5>
                            <p>
                              {" "}
                              2nd Floor, No.112, AKR Tech Park, 7th Mile Hosur
                              Rd, Bengaluru, Karnataka – 560068
                            </p>
                            <ul className="list-none">
                            <li><span className="px-3"><i className="bi dark-green bi-envelope-open-fill"></i></span><span>info@cgbsolution.com</span></li>
                            <li><span className="px-3"><i className="bi dark-green bi-telephone-forward-fill"></i></span><span>+91 9844494599</span></li>
                            <li><span className="px-3"><i className="bi dark-green bi-browser-chrome"></i></span><span>www.cgbsolution.com</span></li>
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="form-style-one ps-xl-5">
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
