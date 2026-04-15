"use client";
import React from "react";
import TeamUrl from "./teamUrl";
import DateFormatter from "./dateFormatter";
import TeamName from "./teamName";

export interface Blog {
  id: number;
  author: string;
  title: string;
  content: string;
  cover_image?: string;
  tags?: [];
  created_at: string;
}

type BlogItemProps = {
  blog: Blog;
};

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
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
