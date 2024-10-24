import Patch from "@/components/news/patch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patch",
};

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <Patch id={params.id} />
    </>
  );
}
