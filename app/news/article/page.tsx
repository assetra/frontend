import NewsList from "@/components/news/newsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article List",
};
export interface Article {
  id: number;
  title: string;
  content: string;
  cover_image?: string;
  created_at: string;
}

const page = () => {
  return <NewsList />;
};

export default page;
