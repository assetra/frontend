import Article from "@/components/news/article";
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

  const article = await fetch(
    `https://gtxadmin.pythonanywhere.com/api/article/${id}`
  ).then((res) => res.json());

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: article.title,
    description: article.content.substring(0, 150),
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 150),
      images: [
        `https://gtxadmin.pythonanywhere.com${article.cover_image}` ||
          "/default-cover.jpg",
        ...previousImages,
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const id = (await params).id;

  const article = await fetch(
    `https://gtxadmin.pythonanywhere.com/api/article/${id}`
  ).then((res) => res.json());

  return (
    <>
      <Article article={article} />
    </>
  );
}
