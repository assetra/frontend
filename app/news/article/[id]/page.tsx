import Article from "@/components/news/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  return (
    <>
      <Article id={id} />
    </>
  );
}
