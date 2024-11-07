import BlogItem from "@/components/blog/blogItem";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  return (
    <>
      <BlogItem id={id} />
    </>
  );
}
