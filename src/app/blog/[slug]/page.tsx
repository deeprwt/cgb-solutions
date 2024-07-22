import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/database/firebase";
import BlogDetailsArea from "@/components/dynamic/blogdetailsarea";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import blog_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterOne from "@/layout/footer/footer-one";
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

  const doc: QueryDocumentSnapshot<DocumentData> = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Blog;
};

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  const blog = await fetchBlog(params.slug);

  if (!blog) {
    return <div>No blog found.</div>;
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
          title="Single Blog Details"
          subtitle=""
          page="Blog"
          bg_img={blog_bg}
          style_2={true}
          // // shape={shape}
        />
        {/* breadcrumb end */}

        {/* blog details area start */}
        <BlogDetailsArea blog={blog} />
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
