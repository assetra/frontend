"use client";
import AuthorBio from "@/components/blog/authorBio";
import AuthorBlogs from "@/components/blog/authorBlogs";
import React, { useEffect, useState } from "react";

export interface Blog {
  id: number;
  author: string;
  title: string;
  content: string;
  cover_image?: string;
  tags?: [];
  created_at: string;
}

export default function Page({ params }: { params: { author: string } }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/api/blogs/author/${params.author}/`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogs(data);
      console.log(data, "test");
    } catch (error) {
      setError("Failed to fetch posts");
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogs) {
    return <div>No blog found.</div>;
  }

  return (
    <div className="py-24 px-[20%]">
      <AuthorBio penname={params.author} />
      <AuthorBlogs blogs={blogs} />
    </div>
  );
}
