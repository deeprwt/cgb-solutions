import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/database/firebase";
// import ArticleDetailsArea from "@/components/dynamic/articledetailsarea";
import ArticleDetailsArea from "@/components/dynamic/articledesigndata/articledetialsarea";
import NewsDetailsArea from "@/components/dynamic/newsdesigndata/newsdetialsarea";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import article_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterOne from "@/layout/footer/footer-one";

type News = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  category: string;
  metaKeywords: string;
  metaDescription: string;
  link: string;
};

interface NewsPageProps {
  params: {
    slug: string;
  };
}

const fetchNews = async (slug: string): Promise<News | null> => {
  const q = query(collection(db, "news"), where("link", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  const doc: QueryDocumentSnapshot<DocumentData> = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() } as News;
};

const NewsPage: React.FC<NewsPageProps> = async ({ params }) => {
  const news = await fetchNews(params.slug);

  if (!news) {
    return <div>No news found.</div>;
  }

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Single Article Details"
            subtitle=""
            page="Article"
            bg_img={article_bg}
            style_2={true}
          />
          {/* breadcrumb end */}

          {/* article details area start */}
          <NewsDetailsArea news={news} />
          {/* article details area end */}

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

export async function generateStaticParams() {
  const newsRef = collection(db, "news");
  const snapshot = await getDocs(newsRef);
  const paths = snapshot.docs.map(doc => ({
    slug: doc.data().link,
  }));

  return paths.map((path) => ({
    slug: path.slug,
  }));
}

export default NewsPage;
