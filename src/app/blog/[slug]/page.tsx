import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/database/firebase";
// import BlogPageClient from "@/components/BlogPageClient";
import BlogPageClient from "@/components/dynamic/blogpageclient";
import type { Metadata } from "next";

type Blog = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  category: string;
    metaTitle: string;
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


// Export the metadata function for dynamic metadata
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await fetchBlog(params.slug);

  if (!blog) {
    return {
      title: "blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.metaKeywords,
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `https://www.cgbsolution.com/blog/${blog.link}`,
      images: [
        {
          url: blog.imageUrl || blog.image,
          alt: blog.metaTitle,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.imageUrl || blog.image],
    },
  };
}

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
