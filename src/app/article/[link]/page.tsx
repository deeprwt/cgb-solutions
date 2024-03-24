import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import blog_bg from "@/assets/images/media/img_32.jpg";
import ArticleDetailsArea from "@/components/article/article-details/article-details-area";
import articleData from "@/data/article-data";
import FooterOne from "@/layout/footer/footer-one";
import { StaticImageData } from "next/image";

type Props = {
  params: { link: string };
};


export function generateMetadata({ params }: Props): Metadata {
  const article = articleData.find((b) => b.link === params.link);

  if (!article) {
    throw new Error(`Article with link ${params.link} not found`);
  }

  return {
    title: article.title,
    // description: article.description, // Assuming you have a description field in your article data
    // imges:article.img.src, 
    openGraph: {
      title: article.title,
      // description: article.description,
      images: [
        {
          url: article.img.src, 
          alt: article.title,
        },
      ],
    },
  };
}

const ArticlePage = ({ params }: Props) => {
  const article = articleData.find((b) => b.link === params.link);

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Single Blog Details"
            subtitle="Meet our experts, guiding you through financial intricacies with precision"
            page="Blog"
            bg_img={blog_bg}
            style_2={true}
          />
          {article ? (
            <ArticleDetailsArea blog={article} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any blog with this name {params.link}</h3>
              </div>
            </div>
          )}
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default ArticlePage;
