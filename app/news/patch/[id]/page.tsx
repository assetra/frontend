import Patch from "@/components/news/patch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patch",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  return (
    <>
      <Patch id={id} />
    </>
  );
}
