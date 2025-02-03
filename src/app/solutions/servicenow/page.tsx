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
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne
            title="ServiceNow Implementation and Consulting"
            subtitle="Automate workflows and service management with expert ServiceNow consulting services"
            page="ServiceNow Implementation and Consulting"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* hero banner end */}

          {/* Start */}

          {/* end */}

          {/* start */}
          <ServicenNowSecton />
          {/* end */}

          {/* start */}
          <FaqSolutions
            title="Why use ServiceNow for businesses?"
            img={screen}
            page="serviceNow"
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
                        <div className="row">
                          <div className="col-md-8 col-6 me-auto ms-auto">
                            <Image
                              src={icon_4}
                              alt="icon"
                              className="lazy-img me-auto ms-auto"
                            />
                          </div>
                        </div>
                        <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                          <h2>Have inquiry? Reach to out us via message...</h2>
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
      {/* add tidio scritp for chat bot */}
      <script
        src="//code.tidio.co/ohsdb1pchgfjw1yfgmpk8nx3haysxugt.js"
        async
      ></script>
      {/* add tidio scritp for chat bot */}
    </Wrapper>
  );
}
