"use client";
import React, { useState, memo } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PriceWidget from "@/components/forum/priceWidget";
import PostItem from "@/components/forum/post";
import TagGroupItem from "@/components/forum/tagGroup";
interface PostCounts {
  [key: string]: number;
}

interface Post {
  id: number;
  image: string;
  title: string;
  tags: string[];
  authorAvatar: string;
  authorInitials: string;
  authorName: string;
  postedAgo: string;
  views: number;
  likes: number;
  comments: number;
}

const Page: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (postId: number) => {
    setLikedPosts((prevLikedPosts) => ({
      ...prevLikedPosts,
      [postId]: !prevLikedPosts[postId],
    }));
  };

  const fetchedTags: string[] = [
    "#javascript",
    "#bitcoin",
    "#design",
    "#innovation",
    "#tutorial",
    "#business",
  ];

  const fetchedGroups: string[] = [
    "#javascript",
    "#bitcoin",
    "#design",
    "#innovation",
    "#tutorial",
    "#blogging",
  ];

  const posts: Post[] = [
    {
      id: 1,
      image: "/assets/forum/post1.png",
      title: "Blockchain developer best practices on innovationchain",
      tags: ["finance", "bitcoin", "crypto"],
      authorAvatar: "/assets/forum/user1.png",
      authorInitials: "PG",
      authorName: "Pavel Gvay",
      postedAgo: "3 weeks ago",
      views: 651324,
      likes: 366545,
      comments: 56,
    },
    {
      id: 2,
      image: "/assets/forum/post2.png",
      title: "How to build a modern website with React",
      tags: ["javascript", "react", "webdev"],
      authorAvatar: "/assets/forum/user2.png",
      authorInitials: "YJ",
      authorName: "Yogesh Jain",
      postedAgo: "1 day ago",
      views: 1234,
      likes: 345,
      comments: 12,
    },
    {
      id: 3,
      image: "/assets/forum/post3.png",
      title: "The future of design and UI/UX",
      tags: ["design", "ui", "ux"],
      authorAvatar: "/assets/forum/user3.png",
      authorInitials: "PG",
      authorName: "Pavel Gvay",
      postedAgo: "1 week ago",
      views: 1234,
      likes: 345,
      comments: 12,
    },
    {
      id: 4,
      image: "/assets/forum/post4.png",
      title: "How to build a modern website with React",
      tags: ["javascript", "react", "webdev"],
      authorAvatar: "/assets/forum/user.png",
      authorInitials: "YJ",
      authorName: "Yogesh Jain",
      postedAgo: "1 day ago",
      views: 1234,
      likes: 345,
      comments: 12,
    },
    {
      id: 5,
      image: "/assets/forum/post1.png",
      title: "The future of design and UI/UX",
      tags: ["design", "ui", "ux"],
      authorAvatar: "/assets/forum/user1.png",
      authorInitials: "PG",
      authorName: "Pavel Gvay",
      postedAgo: "1 week ago",
      views: 1234,
      likes: 345,
      comments: 12,
    },
    {
      id: 6,
      image: "/assets/forum/post2.png",
      title: "How to build a modern website with React",
      tags: ["javascript", "react", "webdev"],
      authorAvatar: "/assets/forum/user2.png",
      authorInitials: "YJ",
      authorName: "Yogesh Jain",
      postedAgo: "1 day ago",
      views: 1234,
      likes: 345,
      comments: 12,
    },
  ];

  const postCounts: PostCounts = {
    "#javascript": 95000,
    "#bitcoin": 80555,
    "#design": 70000,
    "#innovation": 65000,
    "#tutorial": 85000,
    "#business": 75000,
    "#blogging": 60000,
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white w-[100svw] px-4 pb-4 pt-16">
      <aside className="w-full md:w-1/4 p-4 space-y-4">
        <div className="space-y-4">
          <div className="p-4 bg-gray-800 rounded-xl flex flex-col gap-2">
            {[
              {
                title: "Newest and Recent",
                description: "Find the latest update",
              },
              {
                title: "Popular of the day",
                description: "Shots featured today by curators",
              },
              {
                title: "Following",
                description: "Explore from your favorite person",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="hover:bg-[#2C353D] hover:rounded-xl py-2 px-2"
              >
                <h2 className="text-sm font-semibold">{item.title}</h2>
                <p className="text-xs text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800 rounded-xl">
            <h2 className="text-lg font-semibold">Popular Tags</h2>
            {fetchedTags.map((tag) => (
              <TagGroupItem
                key={tag}
                item={tag}
                postCount={postCounts[tag] || 0}
              />
            ))}
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h2 className="text-lg font-semibold">Pinned Group</h2>
            {fetchedGroups.map((group) => (
              <TagGroupItem
                key={group}
                item={group}
                postCount={postCounts[group] || 0}
              />
            ))}
          </div>
        </div>
      </aside>
      <main className="flex-1 p-4 space-y-4">
        <div className="flex items-center space-x-4 p-4 gap-4 bg-gray-800 rounded-[16px]">
          <Avatar>
            <AvatarImage src="/assets/forum/user.png" alt="User Avatar" />
            <AvatarFallback>YJ</AvatarFallback>
          </Avatar>
          <input
            type="text"
            placeholder="Let's share what's going on your mind..."
            className="flex-1 bg-[#2C353D] rounded-xl p-4"
          />
          <button className="p-2 bg-orange-500 rounded-lg">Create Post</button>
        </div>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            isLiked={!!likedPosts[post.id]}
            onToggleLike={() => toggleLike(post.id)}
          />
        ))}
      </main>
      <aside className="w-full md:w-1/5">
        <PriceWidget />
      </aside>
    </div>
  );
};

export default Page;
