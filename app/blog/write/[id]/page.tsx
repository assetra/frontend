import Edit from "@/components/blog/edit";
import React from "react";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      
      <Edit id={params.id} />
    </>
  );
}
