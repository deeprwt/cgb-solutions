import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BlogDetailsArea from "@/components/blogs/blog-details/blog-details-area";
import shape from "@/assets/images/shape/shape_35.svg";
// import blog_data from "@/data/blog-data";
import news_data from "@/data/news-data";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";
import NewsDetailsArea from "@/components/blogs/blog-details/news-details-area";

// export const metadata: Metadata = {
//   title: "News details Page 2",
// };

type Props = {
  params: { link: string };
};


export function generateMetadata({ params }: Props): Metadata {
  // const article = news_data.find((b) => b.link === params.link);
  const hyphen = "-";
  const formattedLink = params.link.toLowerCase().split(' ').join(hyphen);
    const article = news_data.find((b) => b.link.toLowerCase().split(' ').join(hyphen) === formattedLink);


  if (!article) {
    throw new Error(` link ${params.link} not found`);
  }

  return {
    title: article.title,
    description: article.desc || 'no data found', 
    keywords:article.keyword || 'no data', 
    // imges:article.img.src, 
    openGraph: {
      title: article.title,
      description: article.desc,
      images: [
        {
          url: article.img.src, 
          alt: article.title,
        },
      ],
    },
  };
}

const NewsDetailsPage = ({ params }: Props) => {
  // const blog = news_data.find((b) => Number(b.id) === Number(params.id))!;
  const hyphen = "-";
  const formattedLink = params.link.toLowerCase().split(' ').join(hyphen);
    const article = news_data.find((b) => b.link.toLowerCase().split(' ').join(hyphen) === formattedLink);
  // const article = articleData.find((b) => b.link === params.link);
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="News & Media"
            subtitle=""
            page="Blog"
            bg_img={blog_bg}
            style_2={true}
            // // shape={shape}
          />
          {/* breadcrumb end */}

          {/* blog details area start */}
          {article ? (
            // <BlogDetailsArea blog={blog} />
            <NewsDetailsArea blog={article} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any News & media this id {params.link}</h3>
              </div>
            </div>
          )}
          {/* blog details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          {/* <NewsletterBanner /> */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default NewsDetailsPage;
