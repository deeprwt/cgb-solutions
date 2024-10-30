import BlockFeatureAbout from "@/components/block-feature/block-feature-about";
import BlockFeatureOne from "@/components/block-feature/block-feature-one";
import BlockFeatureThree from "@/components/block-feature/block-feature-three";
import BlockFeatureTwo from "@/components/block-feature/block-feature-two";
import HomeTwoBlogs from "@/components/blogs/home-2-blogs";
import ClintLogo from "@/components/clint-logo/logo";
import FancyBannerOne from "@/components/fancy-banner/fancy-banner-one";
import FancyBannerTwo from "@/components/fancy-banner/fancy-banner-two";
import FaqSectionOne from "@/components/faq/faq-section-one";
import FeedbackOne from "@/components/feedback/feedback-one";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import HowWeDo from "@/components/home-data/how-we-do";
import StaffingSolutions from "@/components/home-data/staffing-solutions";
import WhatsNew from "@/components/home-data/whats-new";
import CeoData from "@/components/leadership/ceo";
import PartnersLogos from "@/components/partners/partners-logo";
import TabsData from "@/components/tabs/tabs";
import TeamSectionOne from "@/components/team/team-section-one";
import TextFeatureHome from "@/components/text-feature/text-feature-home";
import TextFeatureNine from "@/components/text-feature/text-feature-nine";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import FooterOne from "@/layout/footer/footer-one";
import Header from "@/layout/header/Header";
import Wrapper from "@/layout/wrapper";
import type { Metadata } from "next";
import Image from "next/image";
import clogo from "@/assets/images/cgbhome/testlogo.png"

export const metadata: Metadata = {
  title: "IT Solutions & Services Company | CGB Solutions",
  description: "Discover CGB Solutions' comprehensive IT services and business technology solutions for companies. We offer expert IT consulting, managed services, cloud solutions, etc.",
  keywords: "IT services, consulting, managed services, peak performance",  
};

export default function HomePage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <Header />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerTwo />
          {/* hero banner end */}

          {/* number counter start  */}
          <TextFeatureHome style_2={true} />
          {/* number counter end */}

          {/* whatsnew section start */}
          {/* <WhatsNew /> */}
          {/* whatsnew section end */}

          {/* about us content start  */}
          <TextFeatureHome />
          {/* about us content start  */}

          <TextFeatureNine />

          {/* tabs are for solutions start */}
          <TabsData />
          {/* tabs are for solutions start */}
   
          <StaffingSolutions />

          {/* clints logo start  */}
          <ClintLogo />
          {/* clints logo start  */}

          {/* Ceo Profile logo start  */}
          {/* <CeoData /> */}
          {/* CEO Profile logo end  */}

          {/* partner logos start  */}
          <PartnersLogos />
          {/* partner logos end  */}

          {/* fancy banner one start */}
          {/* <FancyBannerOne /> */}
          {/* fancy banner one end */}

          {/* block feature one start */}
          {/* <BlockFeatureOne /> */}
          {/* block feature one end */}

          {/* text feature one start */}
          {/* <TextFeatureOne /> */}
          {/* text feature one end */}

          {/* block feature two start */}
          {/* <BlockFeatureTwo /> */}
          {/* block feature two end */}

          {/* block feature three start */}
          {/* <BlockFeatureThree /> */}
          {/* block feature three end */}

          {/* feedback one start */}
          {/* <FeedbackOne /> */}
          {/* feedback one end */}

          {/* team section one start */}
          {/* <TeamSectionOne /> */}
          {/* team section one end */}

          {/* faq section start */}
          {/* <FaqSectionOne /> */}
          {/* faq section end */}

          {/* blog item start */}
          <HomeTwoBlogs />
          {/* blog item end */}

          {/* fancy banner two start */}
          <FancyBannerTwo />
          {/* fancy banner two end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
