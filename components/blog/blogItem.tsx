"use client";
import React, { useEffect, useState } from "react";
import TeamUrl from "./teamUrl";
import DateFormatter from "./dateFormatter";
import TeamName from "./teamName";

type BlogItemProps = {
  id: number;
};

export interface Blog {
  id: number;
  author: string;
  title: string;
  content: string;
  cover_image?: string;
  tags?: [];
  created_at: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ id }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlog = async () => {
    try {
      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/api/blog/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlog(data);
      console.log(data, "test");
    } catch (error) {
      setError("Failed to fetch posts");
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog found.</div>;
  }

  return (
    <div className="py-24 px-[20%]">
      <div className="py-8 px-20 bg-base-300 rounded-xl">
        <div className="flex justify-start gap-4 mb-2">
          {blog.tags &&
            blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#4B6BFB] px-2 py-1 rounded-btn text-sm"
              >
                {tag}
              </span>
            ))}
        </div>
        <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
        <div className="flex align-middle gap-2 mb-6">
          <a href={`/blog/author/${blog.author}`}>
            <TeamUrl pen={blog.author} />{" "}
          </a>
          <a href={`/blog/author/${blog.author}`} className="mr-4">
            <TeamName pen={blog.author} />
          </a>
          <DateFormatter datetime={blog.created_at} />
        </div>
        {blog.cover_image ? (
          <img
            src={`https://gtxadmin.pythonanywhere.com${blog.cover_image}`}
            alt={blog.title}
            className="rounded-xl aspect-video w-[100%]"
          />
        ) : (
          <div className="rounded-xl aspect-video w-[100%] bg-gray-300">
            No image available
          </div>
        )}
        <div
          className="mt-6 prose"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default BlogItem;
