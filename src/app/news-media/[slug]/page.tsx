import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/database/firebase";
// import NewsPageClient from "@/components/NewsPageClient";
import NewsPageClient from "@/components/dynamic/newsdesigndata/newspageclient";

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

  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() } as News;
};

const NewsPage = async ({ params }: NewsPageProps) => {
  const news = await fetchNews(params.slug);

  if (!news) {
    return <div>No news found.</div>;
  }

  return <NewsPageClient slug={params.slug} />;
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
