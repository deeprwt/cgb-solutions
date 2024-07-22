import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/database/firebase";
// import ArticlePageClient from "@/components/ArticlePageClient";
import ArticlePageClient from "@/components/dynamic/articledesigndata/articlepageclient";

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

  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Article;
};

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await fetchArticle(params.slug);

  if (!article) {
    return <div>No article found.</div>;
  }

  return <ArticlePageClient slug={params.slug} />;
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
