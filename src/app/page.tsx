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
import clogo from "@/assets/images/cgbhome/testlogo.png";
import ContactForm from "@/components/forms/contact-form";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import HeroVideoOne from "@/components/hero-banner/hero-video-one";

export const metadata: Metadata = {
  title:
    "IT Solutions & Business Management Consulting | CGB Solutions",
  description:
    "CGB Solutions delivers IT solutions and business management consulting, specializing in Oracle services, digital transformation, and enterprise process optimization.",
  keywords:
    "IT solutions, Business management consulting, Best IT company, Business consultant, Business consulting, Business consulting firms, Business management consultant, Enterprise IT consulting, Integrated technology services, IT business solutions, IT consulting, IT consulting companies, IT consulting firm, IT consulting services, IT outsourcing company, IT services, IT services company, IT services provider, IT support companies, IT support services, IT solutions and services, IT solutions company, IT solutions provider, Management consulting, Oracle consulting services, Strategic technology solutions, Technology consulting services,Business management consulting company,Top IT companies,",
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
          {/* <HeroBannerTwo /> */}
          <HeroVideoOne />
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

          {/* fancy banner two start */}
          {/* <FancyBannerTwo /> */}
          {/* fancy banner two end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
