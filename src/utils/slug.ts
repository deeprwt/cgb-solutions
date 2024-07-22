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
    slug: string;
  };

export const createSlug = (title: string, blogs: Blog[]): string => {
    const slugBase = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  
    let slug = slugBase;
    let counter = 1;
    while (blogs.some(blog => blog.slug === slug)) {
      slug = `${slugBase}-${counter}`;
      counter++;
    }
  
    return slug;
  };
  