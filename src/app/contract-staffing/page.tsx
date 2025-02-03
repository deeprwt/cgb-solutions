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
import about_bg from "@/assets/images/media/ContractStaffingbanner.png";
import TwoColData from "@/components/two-col/two-col-data";
import MendixFeature from "@/components/solutions/mendix-feature";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import SectionSol1 from "@/components/two-col/section-sol1";
import ContractStaffingSection from "@/components/solutions/contract-staffing-section";
import ContactForm from "@/components/forms/contact-form";
import icon_4 from "@/assets/images/assets/ils_07.svg";

export const metadata: Metadata = {
  title: "Workforce Solutions and Contract Staffing Services | CGB Solutions",
  description:
    "Optimize your workforce with CGB Solutions' contract staffing services. Our flexible staffing strategies and workforce management consulting provide skilled temporary talent to meet your business needs.",
  keywords:
    "Contract Staffing,workforce solutions, staffing Staffing Solutions,Workforce Management,Temporary Staffing,Temporary Staffing,Workforce Management Consulting,Hire-Train-Deploy Services,IT Talent Acquisition,IT Contract Staffing Services,contract staffing solutions, hire-train-deploy services, workforce management consulting, recruitment process outsourcing, flexible staffing strategies, skill gap bridging, IT talent acquisition, permanent staffing solutions, employment lifecycle optimization, scalable recruitment models",
};

export default function ContractStaffing() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne
            title="Contract Staffing Services"
            subtitle="Expert contract staffing services to Enhance your IT solutions"
            page="Contract Staffing Services"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* hero banner end */}

          <ContractStaffingSection />
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
    </Wrapper>
  );
}
