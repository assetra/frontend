import BlogItem from "@/components/blog/blogItem";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: number }>;
};

// Dynamic Metadata Generation
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;

  const blog = await fetch(
    `https://gtxadmin.pythonanywhere.com/api/blog/${id}`
  ).then((res) => res.json());

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.content.substring(0, 150),
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 150),
      images: [
        `https://gtxadmin.pythonanywhere.com${blog.cover_image}` ||
          "/default-cover.jpg",
        ...previousImages,
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const id = (await params).id;

  const blog = await fetch(
    `https://gtxadmin.pythonanywhere.com/api/blog/${id}`
  ).then((res) => res.json());

  return (
    <>
      <BlogItem blog={blog} />
    </>
  );
}
