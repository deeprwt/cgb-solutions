import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/database/firebase";
// import ArticleDetailsArea from "@/components/dynamic/articledetailsarea";
import ArticleDetailsArea from "@/components/dynamic/articledesigndata/articledetialsarea";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import article_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterOne from "@/layout/footer/footer-one";

type Article = {
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

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

const fetchArticle = async (slug: string): Promise<Article | null> => {
  const q = query(collection(db, "articles"), where("link", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  const doc: QueryDocumentSnapshot<DocumentData> = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Article;
};

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const article = await fetchArticle(params.slug);

  if (!article) {
    return <div>No article found.</div>;
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
          <ArticleDetailsArea article={article} />
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
  const articlesRef = collection(db, "articles");
  const snapshot = await getDocs(articlesRef);
  const paths = snapshot.docs.map(doc => ({
    slug: doc.data().link,
  }));

  return paths.map((path) => ({
    slug: path.slug,
  }));
}

export default ArticlePage;
