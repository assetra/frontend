import BlogItem from "@/components/blog/blogItem";
import React from "react";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <BlogItem id={params.id} />
    </>
  );
}
