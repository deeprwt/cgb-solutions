import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/database/firebase";
// import BlogPageClient from "@/components/BlogPageClient";
import BlogPageClient from "@/components/dynamic/blogpageclient";

type Blog = {
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

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const fetchBlog = async (slug: string): Promise<Blog | null> => {
  const q = query(collection(db, "blogs"), where("link", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Blog;
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const blog = await fetchBlog(params.slug);

  if (!blog) {
    return <div>No blog found.</div>;
  }

  return <BlogPageClient slug={params.slug} />;
};

export async function generateStaticParams() {
  const blogsRef = collection(db, "blogs");
  const snapshot = await getDocs(blogsRef);
  const paths = snapshot.docs.map(doc => ({
    slug: doc.data().link,
  }));

  return paths.map((path) => ({
    slug: path.slug,
  }));
}

export default BlogPage;
