import Article from "@/components/news/article";
import Pdf from "@/components/news/Pdf";
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
    description: 'This is a PDF article',
    openGraph: {
      title: article.title,
      description: 'This is a PDF article',
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

  const pdf = await fetch(
    `https://gtxadmin.pythonanywhere.com/api/pdf/${id}`
  ).then((res) => res.json());

  return (
    <>
      <Pdf pdf={pdf} />
    </>
  );
}
