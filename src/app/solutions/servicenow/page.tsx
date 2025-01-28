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

import about_bg from "@/assets/images/media/ServiceNowbanner.png";
import TwoColData from "@/components/two-col/two-col-data";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import SectionSol1 from "@/components/two-col/section-sol1";
import screen from "@/assets/images/solutions/servicenow/faq.jpg";
import ServicenNowSecton from "@/components/solutions/servicenow-section";

export const metadata: Metadata = {
  title: "ServiceNow Consulting | IT Service Management Simplified with CGB Solutions",
  description : "Optimize workflows and IT operations with CGB Solutions' ServiceNow consulting services, from implementation to customization for seamless efficiency.",
  keywords : "ServiceNow solutions, IT automation,ServiceNow consulting services, IT process optimization, ServiceNow ITSM implementation, workflow automation experts, customized IT solutions, IT service management software, ServiceNow cloud solutions, automated IT processes, ServiceNow module customization, digital service optimization,ServiceNow consulting, ServiceNow implementation, IT service management, ITSM consulting, ServiceNow solutions, workflow automation, ServiceNow customization, ServiceNow optimization, IT workflows, IT operations, enterprise IT management, ServiceNow integrations, ServiceNow platform solutions, process efficiency tools, IT workflow automation, IT service solutions, advanced ITSM, business automation tools, scalable ServiceNow solutions, enterprise ServiceNow services, ServiceNow implementation strategy, process optimization tools, IT efficiency solutions, ServiceNow enterprise tools, ServiceNow workflow management, streamlined IT operations.",
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
