import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import React,{memo} from "react";
interface PostItemProps {
    post: Post;
    isLiked: boolean;
    onToggleLike: () => void;
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
  
  
const PostItem: React.FC<PostItemProps> = memo(({ post, isLiked, onToggleLike }) => {
    return (
      <div className="p-4 bg-gray-800 rounded-lg space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src={post.image}
            alt="Post Image"
            className="w-16 h-16 rounded-lg"
            width="60"
            height="60"
            style={{ aspectRatio: "60/60", objectFit: "cover" }}
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <div className="flex space-x-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-700 rounded-lg text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            className={`text-gray-400 ${isLiked ? 'text-red-500' : ''}`}
            onClick={onToggleLike}
          >
            {isLiked ? <FaHeart className="w-6 h-6" /> : <CiHeart className="w-6 h-6" />}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.authorAvatar} alt="User Avatar" />
            <AvatarFallback>{post.authorInitials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p>{post.authorName} • {post.postedAgo}</p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <span>{post.views} Views</span>
              <span>{post.likes} Likes</span>
              <span>{post.comments} Comments</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

export default PostItem;