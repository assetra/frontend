import BlogItem from "@/components/blog/blogItem";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <BlogItem id={params.id} />
    </>
  );
}
