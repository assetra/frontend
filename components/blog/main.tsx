"use client";
import React, { useEffect, useState } from "react";
import Carousel from "./carousel";
import BlogList from "./blogList";

export interface Blog {
  id: number;
  author: string;
  title: string;
  content: string;
  image?: string;
  tags?: string;
  created_at: string;
}

const main = () => {
  const [pins, setPins] = useState<Blog[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`https://gtxadmin.pythonanywhere.com/blogs`);
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

  const fetchPinned = async () => {
    try {
      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/pinned`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPins(data);
      console.log(data, "test");
    } catch (error) {
      setError("Failed to fetch posts");
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPinned();
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
    <div className="p-16">
      <div className="p-4 bg-base-300 rounded-xl">
        <Carousel pins={pins} />
      </div>

      <div className="mt-4 p-4 bg-base-300 rounded-xl">
        <p>Latest Post</p>
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default main;
