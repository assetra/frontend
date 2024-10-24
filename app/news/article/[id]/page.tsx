import Article from "@/components/news/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article",
};

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <Article id={params.id} />
    </>
  );
}
