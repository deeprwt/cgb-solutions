import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderSix from "@/layout/header/header-six";
import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import BlockFeatureEleven from "@/components/block-feature/block-feature-eleven";
import BlockFeatureTwelve from "@/components/block-feature/block-feature-twelve";
import PortfolioTwo from "@/components/portfolio/portfolio-two";
import TextFeatureEight from "@/components/text-feature/text-feature-eight";
import FancyBannerFive from "@/components/fancy-banner/fancy-banner-five";
import FeedbackSix from "@/components/feedback/feedback-six";
import TeamSectionThree from "@/components/team/team-section-three";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";
import FooterThree from "@/layout/footer/footer-three";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import HeaderTwo from "@/layout/header/Header";
import HeaderOne from "@/layout/header/header-one";
import FooterOne from "@/layout/footer/footer-one";
import DigitalMarketingSection from "@/components/solutions/digital-marketing-section";
import ImgTextBtnData from "@/components/two-col/img-text-btn-data";
import servicenow1 from "@/assets/images/solutions/servicenow/servicenow.png";
import seo from "@/assets/images/solutions/digital-marketing/seo.png";
import Webdesign from "@/assets/images/solutions/digital-marketing/WEBSITE DESIGNING.png";
import appdevlopment from "@/assets/images/solutions/digital-marketing/app-development.png";
import brandig from "@/assets/images/solutions/digital-marketing/brand.png";
import leadgenration from "@/assets/images/solutions/digital-marketing/lead-generation.png";

export const metadata: Metadata = {
  title: "Digital Marketing",
};

export default function HomePageSix() {
  return (
    <Wrapper>
      <div className="main-page-wrapper mb-20">
        {/* header start */}

        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerSix />
          {/* hero banner end */}

          {/* block feature eleven start */}
          {/* <BlockFeatureEleven /> */}
          {/* block feature eleven end */}

          <ImgTextBtnData
            title="Website Designing"
            para="At CGB, we understand the power of a well-designed website. As a leading website design agency serving clients in India,UAE, USA, MEA, we specialize in crafting user-centric websites that not only look stunning but also drive results.
          "
            subpara="Our team of skilled designers and developers collaborates closely with you to understand your brand identity, target audience, and business goals. We create responsive websites that seamlessly adapt to any device, ensuring a flawless user experience across desktops, tablets, and mobiles. Whether you're seeking a local SEO focus to attract customers nearby or a broader digital marketing strategy encompassing website design, SEO, SMM, PPC (like Rocket Sales Agency), we offer comprehensive solutions to elevate your online presence.
          "
            link="test"
            img={Webdesign}
            style_2={true}
          />

          <ImgTextBtnData
            title="App development"
            para="Struggling to find the perfect app development partner? Look no further! We offer comprehensive app development services, from concept to creation, for all your mobile (Android and iOS), web app, and e-commerce needs. We'll help you navigate the complexities of app development, ensuring your vision becomes a reality. Stop searching for 'app development companies near me' - we're your one-stop shop for a successful app launch.
          "
            link="test"
            img={appdevlopment}
          />

          <ImgTextBtnData
            title="SEO"
            para="In today's competitive digital landscape, visibility is paramount. At [Your Company Name], a leading digital marketing agency, we empower businesses across India, UAE, USA, and the broader Middle East & Africa (MEA) region to achieve top search engine rankings and dominate their online presence.
          "
            subpara="Our team of seasoned SEO specialists leverages a data-driven approach to craft customized strategies aligned with your specific industry and target audience. We meticulously research the most relevant keywords, optimize your website's content and structure, and build a robust backlink profile, propelling your brand to the forefront of search results. Whether you require local SEO services to attract nearby customers or international SEO expertise to expand your global reach, CGB Solutions is your trusted partner for comprehensive SEO solutions.
          "
            link="test"
            img={seo}
            style_2={true}
          />

          <ImgTextBtnData
            title="Branding"
            para="Strengthen your brand and make a lasting impression. Our branding gurus create powerful strategies that dig deeper than just a logo. We build brand identities that truly connect with your target audience. Whether you're a startup or a seasoned player, we offer branding services nationwide (Bangalore, Delhi, Mumbai, etc.) and internationally (Dubai, Abu Dhabi) to propel you to the top. Let's craft your unique brand story, together..
          "
            link="test"
            img={brandig}
          />

          <ImgTextBtnData
            title="Lead Generation"
            para="In today's competitive landscape, generating qualified leads is crucial for business growth. At CGB, we offer a comprehensive suite of lead generation services designed to help businesses of all sizes acquire the right leads, convert them into customers, and ultimately drive revenue.
          "
            subpara="Our expertise spans across various industries, including real estate (generating leads that pay at closing!), B2B, HVAC, insurance, and financial services.  Whether you leverage platforms like LinkedIn or prefer a broader approach, we craft targeted lead generation strategies that align with your audience and budget.  We differentiate ourselves from B2B lead generation companies by focusing on quality over quantity, delivering leads with high conversion potential.

          "
            link="test"
            img={leadgenration}
            style_2={true}
          />

          {/* block feature twelve start */}
          <BlockFeatureTwelve />
          {/* block feature twelve end */}
          {/* <DigitalMarketingSection/> */}
          {/* portfolio two start */}
          {/* <PortfolioTwo /> */}
          {/* portfolio two end */}

          {/* text feature eight start */}
          <TextFeatureEight style_2={true} />
          {/* text feature eight end */}

          {/* fancy banner five start */}
          {/* <FancyBannerFive style_3={true} />   */}
          {/* fancy banner five end */}

          {/* feedback six start */}
          <FeedbackSix />
          {/* feedback six end */}

          {/* team section start */}
          {/* <TeamSectionThree style_2={true} /> */}
          {/* team section end */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}

          {/* newsletter banner start */}
          {/* <NewsletterBanner style_2={true} /> */}
          {/* newsletter banner end */}
        </main>
      </div>
      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </Wrapper>
  );
}
