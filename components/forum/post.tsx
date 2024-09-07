import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import React, { memo } from "react";

interface PostItemProps {
  post: Post;
  isLiked: boolean;
  onToggleLike: () => void;
  onClick: () => void; // Add this line
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

const PostItem: React.FC<PostItemProps> = memo(
  ({ post, isLiked, onToggleLike, onClick }) => {
    // Add onClick here
    return (
      <div
        className="p-4 bg-gray-800 space-y-4 border-gray-600 border-2 my-1 rounded-[16px] cursor-pointer"
        onClick={onClick} // Add this line
      >
        <div className="grid grid-cols-6 space-x-4 ">
          <img
            src={post.image}
            alt="Post Image"
            className="rounded-lg aspect-square col-span-1"
            width="auto"
            height="75"
            style={{ objectFit: "cover" }}
          />
          <div className="col-span-5 grid grid-rows-5">
            <div className="flex justify-between row-span-2">
              <h3 className="text-lg font-semibold w-[95%]">{post.title}</h3>
              <button
                className={`text-gray-400 w-[5%] ${isLiked ? "text-red-500" : ""}`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from bubbling up to the parent div
                  onToggleLike();
                }}
              >
                {isLiked ? (
                  <FaHeart className="w-6 h-6" />
                ) : (
                  <CiHeart className="w-6 h-6" />
                )}
              </button>
            </div>
            <div className="flex space-x-2 row-span-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-700 rounded-badge text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4 row-span-2">
              <Avatar>
                <AvatarImage src={post.authorAvatar} alt="User Avatar" />
                <AvatarFallback>{post.authorInitials}</AvatarFallback>
              </Avatar>
              <div className="flex w-full justify-between">
                <p>
                  {post.authorName} • {post.postedAgo}
                </p>
                <div className="flex space-x-4 text-sm text-gray-400">
                  <span>{post.views} Views</span>
                  <span>{post.likes} Likes</span>
                  <span>{post.comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PostItem;
