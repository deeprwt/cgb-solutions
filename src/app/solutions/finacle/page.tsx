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
import Image  from "next/image";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import about_bg from "@/assets/images/media/Finaclebanner.png";
import TwoColData from "@/components/two-col/two-col-data";
import MendixFeature from "@/components/solutions/mendix-feature";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import SectionSol1 from "@/components/two-col/section-sol1";
import FinacleSecton from "@/components/solutions/finacle-section";
import screen from "@/assets/images/solutions/Finacle/faq.jpg";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Finacle Core Banking | Next-Generation Banking with CGB Solutions",
  description : "Enhance banking efficiency with CGB’s Finacle Core Banking expertise for financial technology innovation.",
  keywords : "Finacle core banking, banking solutions,core banking solutions, Finacle consulting services, digital banking innovation, banking technology customization, financial software implementation, core banking optimization, digital finance solutions, customized banking software, Finacle cloud solutions, banking process automation,",
};

export default function Finacle() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne
            title="Finacle Core Banking Solutions"
            subtitle="Finacle Core Banking: Transform your financial services with Finacle Core Banking Solutions"
            page="Finacle Core Banking Solutions"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* hero banner end */}

          {/* Start */}
          {/* <TwoColData /> */}
          {/* end */}

          {/* start */}
          <FinacleSecton />
          {/* end */}

          {/* start */}
          <FaqSolutions 
          title="Why use Finacle for businesses?"
          img={screen}
          page="finaclefaq"
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
                    <script src="//code.tidio.co/ohsdb1pchgfjw1yfgmpk8nx3haysxugt.js" async></script>
        {/* add tidio scritp for chat bot */}
    </Wrapper>
  );
}
