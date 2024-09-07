"use client";
import React, { useState, memo, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PriceWidget from "@/components/forum/priceWidget";
import TagGroupItem from "@/components/forum/tagGroup";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaEdit, FaComment } from "react-icons/fa";
import { BiBarChart, BiUpvote, BiSolidUpvote } from "react-icons/bi";
import { FaPencil } from "react-icons/fa6";
import { useAuth } from "@/contexts/AuthContext";
import withAuth from "../auth/withAuth";

interface PostCounts {
  [key: string]: number;
}

interface Comment {
  id: number;
  post_id: number;
  parent_id: number | null;
  user_id: number;
  username: string;
  content: string;
  created_at: string;
  replies: Comment[];
}

interface Post {
  id: number;
  image: string;
  title: string;
  tags: string;
  authorAvatar: string;
  username: string;
  author_id: number;
  author_name: string;
  created_at?: string;
  views: string;
  likes?: string;
  upvotes?: string;
  comments: Comment[];
  content?: string;
}

const getNumberOfItems = (items: string | undefined): number => {
  if (!items) return 0;
  const itemsArray = items.split(",");
  return itemsArray.filter((item) => item.trim() !== "").length;
};

const isPresent = (
  likes: string | undefined,
  numberToCheck: number
): boolean => {
  if (!likes) return false;
  const likesArray = likes.split(",");
  const numberString = numberToCheck.toString();
  return likesArray.includes(numberString);
};

const parseAndFormatDate = (dateString: string | undefined): Date => {
  if (!dateString) {
    console.warn("Date string is undefined, using current date as fallback");
    return new Date(); // Return current date as fallback
  }

  try {
    const baseDate = new Date(dateString);
    if (isNaN(baseDate.getTime())) {
      throw new Error("Invalid date");
    }

    // Add 5 hours and 30 minutes
    baseDate.setHours(baseDate.getHours() + 5);
    baseDate.setMinutes(baseDate.getMinutes() + 30);

    return baseDate;
  } catch (error) {
    console.error("Error parsing date:", error);
    return new Date(); // Return current date if parsing fails
  }
};

const timeAgo = (dateString: string | undefined): string => {
  if (!dateString) {
    return "Unknown time";
  }

  // Assuming parseAndFormatDate correctly parses the dateString
  const createdDate = parseAndFormatDate(dateString);
  const now = new Date();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = now.getTime() - createdDate.getTime();

  // Convert milliseconds to minutes
  const differenceInMinutes = Math.floor(
    differenceInMilliseconds / (1000 * 60)
  );

  if (differenceInMinutes < 1) {
    return "Just now";
  }
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} minutes ago`;
  }

  // Convert minutes to hours
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  if (differenceInHours < 24) {
    return `${differenceInHours} hours ago`;
  }

  // Convert hours to days
  const differenceInDays = Math.floor(differenceInHours / 24);
  if (differenceInDays < 30) {
    return `${differenceInDays} days ago`;
  }

  // Convert days to months
  const differenceInMonths = Math.floor(differenceInDays / 30);
  if (differenceInMonths < 12) {
    return `${differenceInMonths} months ago`;
  }

  // Convert months to years
  const differenceInYears = Math.floor(differenceInMonths / 12);
  return `${differenceInYears} years ago`;
};

const WriteIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div
      className="tooltip tooltip-left fixed bottom-24 right-6 p-4 rounded-full bg-green-400 text-white cursor-pointer shadow-lg z-[9999]"
      data-tip="Click to write a post"
      onClick={onClick}
      aria-label="Open to write"
    >
      <div className="avatar w-[25px] h-[25px] flex items-center justify-center">
        <FaPencil />
      </div>
    </div>
  );
};

const CommentView: React.FC<{
  post: Post;
  onBack: () => void;
  onAddComment: (
    content: string,
    parentId: number | null,
    postId: number
  ) => void;
  postId: number;
}> = memo(({ post, onBack, onAddComment, postId }) => {
  const [comments, setComments] = useState<Comment[]>(post.comments || []);

  // Update the comments when the post prop changes
  useEffect(() => {
    setComments(post.comments || []);
  }, [post]);

  const [newComment, setNewComment] = useState<string>("");

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment, null, postId);
      setNewComment("");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-[16px]">
      <button
        onClick={onBack}
        className="mb-2 text-orange-500 border-b-2 border-transparent hover:border-orange-600"
      >
        &larr; Back
      </button>
      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onAddComment={onAddComment}
            postId={postId}
          />
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="mt-6">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          rows={3}
          className="w-full p-4 border border-gray-700 rounded-xl bg-gray-900 text-white"
        />
        <button
          type="submit"
          className="mt-2 text-white px-4 py-2 bg-orange-500 rounded-btn hover:bg-orange-600"
        >
          Comment
        </button>
      </form>
    </div>
  );
});

const CommentItem: React.FC<{
  comment: Comment;
  onAddComment: (
    content: string,
    parentId: number | null,
    postId: number
  ) => void;
  postId: number;
}> = ({ comment, onAddComment, postId }) => {
  const [showReplyForm, setShowReplyForm] = useState<boolean>(false);
  const [replyContent, setReplyContent] = useState<string>("");

  const handleReplyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyContent(event.target.value);
  };

  const handleReplySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (replyContent.trim()) {
      onAddComment(replyContent, comment.id, postId);
      setReplyContent("");
      setShowReplyForm(false);
    }
  };

  return (
    <div className="border-b border-gray-700 pb-4">
      <div className="flex items-center">
        <Avatar className="mr-2">
          <AvatarImage src="/assets/forum/user1.png" alt={comment.username} />
          <AvatarFallback>{comment.username}</AvatarFallback>
        </Avatar>
        <div>
          <span className="font-semibold">{comment.username}</span>
          <span className="text-gray-400 text-sm ml-2">
            {timeAgo(comment.created_at)}
          </span>
        </div>
      </div>
      <p className="text-sm mt-2">{comment.content}</p>
      <button
        onClick={() => setShowReplyForm(!showReplyForm)}
        className="my-2 text-orange-400 border-b-2 border-transparent hover:border-orange-600"
      >
        {showReplyForm ? "Cancel" : "Reply"}
      </button>
      {showReplyForm && (
        <form onSubmit={handleReplySubmit} className="mt-4 ml-6">
          <textarea
            value={replyContent}
            onChange={handleReplyChange}
            placeholder="Write a reply..."
            rows={3}
            className="w-full p-4 border border-gray-700 rounded-xl bg-gray-900 text-white"
          />
          <button
            type="submit"
            className="mt-2 text-white px-4 py-2 bg-orange-500 rounded-btn hover:bg-orange-600"
          >
            Reply
          </button>
        </form>
      )}
      {comment.replies.length > 0 && (
        <div className="mt-4 ml-6">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onAddComment={onAddComment}
              postId={postId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PostItem: React.FC<{
  post: Post;
  onToggleLike: () => void;
  onToggleUpVote: () => void;
  onClick: () => void;
  onViewComments: () => void;
  onViewEdit: () => void;
}> = memo(
  ({
    post,
    onToggleLike,
    onToggleUpVote,
    onClick,
    onViewComments,
    onViewEdit,
  }) => {
    const { user } = useAuth();

    return (
      <div
        className="p-4 bg-gray-800 space-y-4 border-gray-600 border-2 my-1 rounded-[16px] cursor-pointer"
        onClick={onClick}
      >
        <div className="grid grid-cols-6 space-x-4">
          <img
            src="/assets/forum/post1.png"
            alt="Post Image"
            className="rounded-lg aspect-square col-span-1"
            width="auto"
            height="75"
            style={{ objectFit: "cover" }}
          />
          <div className="col-span-5 grid grid-rows-5">
            <div className="flex justify-between row-span-2">
              <h3 className="text-lg font-semibold w-[95%]">{post.title}</h3>
              {user.id === post.author_id && (
                <button
                  className="text-gray-400 w-[5%]"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewEdit();
                  }}
                >
                  <FaEdit className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex space-x-2 row-span-1">
              {post.tags &&
                post.tags.split(",").map((tag) => (
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
                <AvatarImage src="/assets/forum/user1.png" alt="User Avatar" />
                <AvatarFallback>{post.username}</AvatarFallback>
              </Avatar>
              <div className="flex w-full justify-between">
                <p>
                  {post.author_name} • {timeAgo(post.created_at)}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 justify-between">
                  <button
                    className={`flex items-center space-x-1 ${isPresent(post.upvotes, user.id) ? "text-red-500 hover:text-red-300" : "hover:text-blue-400"}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleUpVote();
                    }}
                  >
                    <span className="text-gray-400 hover:text-gray-400">
                      {getNumberOfItems(post.upvotes)}
                    </span>
                    {isPresent(post.upvotes, user.id) ? (
                      <BiSolidUpvote className="w-5 h-4" />
                    ) : (
                      <BiUpvote className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex items-center space-x-1">
                    <span>{getNumberOfItems(post.views)}</span>
                    <BiBarChart />
                  </div>
                  <button
                    className={`flex items-center space-x-1 ${isPresent(post.likes, user.id) ? "text-red-500 hover:text-red-300" : "hover:text-blue-400"}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLike();
                    }}
                  >
                    <span className="text-gray-400 hover:text-gray-400">
                      {getNumberOfItems(post.likes)}
                    </span>
                    {isPresent(post.likes, user.id) ? (
                      <FaHeart className="w-5 h-4" />
                    ) : (
                      <CiHeart className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewComments();
                    }}
                    className="flex items-center space-x-1"
                  >
                    <span>{post.comments?.length || 0}</span>
                    <FaComment />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

// single post view
const SinglePostView: React.FC<{
  post: Post;
  onBack: () => void;
  onViewComments: () => void;
  onToggleLike: () => void;
  onToggleUpVote: () => void;
  onViewEdit: () => void;
}> = memo(
  ({
    post,
    onToggleLike,
    onToggleUpVote,
    onBack,
    onViewComments,
    onViewEdit,
  }) => {
    const { user } = useAuth();

    const handleLikeClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      await onToggleLike();
    };

    const handleUpvoteClick = async (
      e: React.MouseEvent<HTMLButtonElement>
    ) => {
      e.stopPropagation();
      await onToggleUpVote();
    };

    return (
      <div className="bg-gray-800 p-6 rounded-[16px]">
        <button
          onClick={onBack}
          className="mb-2 text-orange-500 border-b-2 border-transparent hover:border-orange-600"
        >
          &larr; Back
        </button>
        <div className="flex justify-between row-span-2">
          <h3 className="text-lg font-semibold w-[95%]">{post.title}</h3>
          {user.id === post.author_id && (
            <button
              className="text-gray-400 w-[5%]"
              onClick={(e) => {
                e.stopPropagation();
                onViewEdit();
              }}
            >
              <FaEdit className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-3">
            <img
              src="/assets/forum/post1.png"
              alt={post.title}
              className="w-full rounded-lg"
            />
            <div className="flex justify-center mb-4">
              {post.tags &&
                post.tags.split(",").map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 bg-gray-700 px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
          <div className="col-span-5">
            <p className="text-sm my-4">
              {post.content || "Post content goes here..."}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Avatar className="mr-2">
              <AvatarImage
                src="/assets/forum/user1.png"
                alt={post.author_name}
              />
              <AvatarFallback>{post.username}</AvatarFallback>
            </Avatar>
            <span>{post.author_name}</span>
            <span className="mx-2">•</span>
            <span>{timeAgo(post.created_at)}</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400 justify-between">
            <button
              className={`flex items-center space-x-1 ${
                isPresent(post.upvotes, user.id)
                  ? "text-red-500 hover:text-red-300"
                  : "hover:text-blue-400"
              }`}
              onClick={handleUpvoteClick}
            >
              <span className="text-gray-400 hover:text-gray-400">
                {getNumberOfItems(post.upvotes)}
              </span>
              {isPresent(post.upvotes, user.id) ? (
                <BiSolidUpvote className="w-5 h-4" />
              ) : (
                <BiUpvote className="w-5 h-5" />
              )}
            </button>
            <div className="flex items-center space-x-1">
              <span>{getNumberOfItems(post.views)}</span>
              <BiBarChart />
            </div>
            <button
              className={`flex items-center space-x-1 ${
                isPresent(post.likes, user.id)
                  ? "text-red-500 hover:text-red-300"
                  : "hover:text-blue-400"
              }`}
              onClick={handleLikeClick}
            >
              <span className="text-gray-400 hover:text-gray-400">
                {getNumberOfItems(post.likes)}
              </span>
              {isPresent(post.likes, user.id) ? (
                <FaHeart className="w-5 h-4" />
              ) : (
                <CiHeart className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewComments();
              }}
              className="flex items-center space-x-1"
            >
              <span>{post.comments?.length || 0}</span>
              <FaComment />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

const EditView: React.FC<{
  post: Post;
  onBack: () => void;
  onEditPost: (updatedPost: Partial<Post>) => void;
  fetchedTags: string[];
}> = ({ post, onBack, fetchedTags, onEditPost }) => {
  const [id, setId] = useState<number | undefined>(post.id);
  const [title, setTitle] = useState<string>(post.title || "");
  const [content, setContent] = useState<string>(post.content || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(
    post.tags ? post.tags.split(",") : []
  );

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPost = {
      id,
      title,
      content,
      tags: selectedTags.join(","),
    };
    await onEditPost(updatedPost);
  };

  return (
    <div className="p-4 space-y-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-rows-6 max-h-[75svh] min-h-[500px] p-4 bg-gray-800 overflow-y-auto rounded-xl gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <input type="text" value={id} placeholder="" hidden />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your post title here..."
          className="row-span-1 bg-[#2C353D] rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="row-span-4 bg-[#2C353D] rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Edit your post content..."
          rows={8}
        ></textarea>
        <div className="row-span-1 flex items-center justify-between">
          <div className="flex space-x-2">
            {fetchedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`p-2 text-[14px] rounded-badge ${
                  selectedTags.includes(tag)
                    ? "bg-orange-500 text-white"
                    : "bg-[#2C353D] text-gray-400"
                }`}
                onClick={() => handleTagClick(tag)}
                disabled={
                  !selectedTags.includes(tag) && selectedTags.length >= 3
                }
              >
                {tag}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="p-2 bg-orange-500 rounded-btn hover:bg-orange-600 md:w-[150px] text-white"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

const Main: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [viewingComments, setViewingComments] = useState<boolean>(false);
  const [editingPost, setEditingPost] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isWriting, setIsWriting] = useState<boolean>(false);
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://gtxadmin.pythonanywhere.com/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPosts(data);
      console.log(data, "test");
    } catch (error) {
      setError("Failed to fetch posts");
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPostsByUpvotes = async () => {
    try {
      const response = await fetch(
        "https://gtxadmin.pythonanywhere.com/posts_by_upvotes"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPosts(data);
      console.log(data, "test");
    } catch (error) {
      setError("Failed to fetch posts");
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPostsByTag = async (tag: string) => {
    try {
      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/posts_by_tag?tag=${encodeURIComponent(tag)}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const posts = await response.json();
      setPosts(posts);
      console.log(posts, "test");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return [];
    }
  };

  const handleItemClick = (title: string) => {
    if (title === "Newest and Recent") {
      fetchPosts();
    } else if (title === "Popular of the day") {
      fetchPostsByUpvotes();
    }
    // Add additional handling for other categories if needed
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const author_id = user.id;
    const username = user.username;
    const author_name = `${user.first_name} ${user.last_name}`;
    const tags = selectedTags.join(",");
    console.log(author_id, username, author_name, tags, content, title);

    try {
      const response = await fetch(
        "https://gtxadmin.pythonanywhere.com/create_post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content,
            title,
            tags,
            author_id,
            author_name,
            username,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error("Failed to create post");
      }

      const data = await response.json();
      const newPost: Post = data.post;

      setPosts((prevPosts) => [...prevPosts, newPost]);
      setTitle("");
      setContent("");
      setSelectedTags([]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleEditPost = async (updatedPost: Partial<Post>) => {
    try {
      const { id, content, title, tags } = updatedPost;
      const author_id = user.id;

      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/edit_post/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content,
            title,
            tags,
            author_id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the post");
      }

      // Parse the response to get the updated post data
      const data = await response.json();

      // Extract the updated post from the response
      const newPost: Post = data.post;

      // Update the posts list
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? newPost : post))
      );

      // Update the selected post if it's the one being modified
      setSelectedPost((prevPost) =>
        prevPost && prevPost.id === id ? newPost : prevPost
      );

      setEditingPost(false);
    } catch (error) {
      // Handle error
      console.error("Failed to update post:", error);
    }
  };

  const updatePostAndList = async (
    postId: number,
    action: "like" | "upvote"
  ) => {
    const user_id = user.id;
    const endpoint =
      action === "like"
        ? `https://gtxadmin.pythonanywhere.com/like_post/${postId}`
        : `https://gtxadmin.pythonanywhere.com/upvote_post/${postId}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id }),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${action} the post`);
      }

      // Parse the response to get the updated post data
      const data = await response.json();

      // Extract the updated post from the response
      const updatedPost: Post = data.post;

      // Update the posts list
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === postId ? updatedPost : post))
      );

      // Update the selected post if it's the one being modified
      setSelectedPost((prevPost) =>
        prevPost && prevPost.id === postId ? updatedPost : prevPost
      );
    } catch (error) {
      console.error(error);
    }
  };

  // The toggleLike and toggleUpVote functions remain the same
  const toggleLike = (postId: number) => updatePostAndList(postId, "like");
  const toggleUpVote = (postId: number) => updatePostAndList(postId, "upvote");

  const handlePostClick = async (post: Post) => {
    setSelectedPost(post);
    setViewingComments(false);

    const user_id = user.id;

    try {
      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/view_post/${post.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to view the post");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleWriteClick = () => {
    setIsWriting(true);
  };

  const handleCloseWrite = () => {
    setIsWriting(false);
  };

  const handleViewComments = () => {
    setViewingComments(true);
  };

  const handleEditView = () => {
    setEditingPost(true);
  };

  const handleAddComment = async (
    content: string,
    parentId: number | null,
    postId: number
  ) => {
    const author_id = user.id;
    const username = user.username;

    try {
      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/add_comment/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: author_id,
            username: username,
            content: content,
            parent_id: parentId,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const updatedPost: Post = data.post;
        console.log(updatedPost);

        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === postId ? updatedPost : post))
        );

        // Update selectedPost to trigger a re-render in CommentView
        setSelectedPost(updatedPost); // Make sure this updates correctly
      } else {
        const error = await response.json();
        console.error(error.error);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
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
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen md:overflow-hidden bg-gray-900 text-white w-[100svw] px-4 pb-4 pt-16">
      {/* Left sidebar */}
      <aside className="w-full md:w-[20%] p-4 space-y-4">
        <div className="space-y-4">
          <div className="px-4 py-2 bg-gray-800 rounded-xl flex flex-col max-h-[170px]">
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
                className="hover:bg-[#2C353D] hover:rounded-xl py-2 px-2 cursor-pointer"
                onClick={() => handleItemClick(item.title)}
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
            <div>
              {fetchedTags.map((tag) => (
                <TagGroupItem
                  key={tag}
                  item={tag}
                  postCount={10}
                  onClick={fetchPostsByTag}
                />
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4 space-y-4">
        {/* Conditional rendering for the Write view and other views */}
        {isWriting ? (
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-4 p-4 gap-4 bg-gray-800 rounded-[16px]">
              <Avatar>
                <AvatarImage src="/assets/forum/user1.png" alt="User Avatar" />
                <AvatarFallback>YJ</AvatarFallback>
              </Avatar>
              <input
                type="text"
                placeholder="Let's share what's going on your mind..."
                className="flex-1 bg-[#2C353D] rounded-xl p-4"
                disabled
              />
              <button
                type="button"
                className="p-2 bg-orange-500 rounded-btn hover:bg-orange-600 md:w-[150px]"
                onClick={handleCloseWrite}
              >
                Discard Post
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-rows-6 max-h-[75svh] min-h-[500px] p-4 bg-gray-800 overflow-y-auto rounded-xl gap-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your post title here..."
                className="row-span-1 bg-[#2C353D] rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="row-span-4 bg-[#2C353D] rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="What's on your mind? Start writing your post..."
                rows={8}
              ></textarea>

              {/* Tag Selection */}
              <div className="row-span-1 flex items-center justify-between">
                <div className="flex space-x-2">
                  {fetchedTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`p-2 text-[14px] rounded-badge ${
                        selectedTags.includes(tag)
                          ? "bg-orange-500 text-white"
                          : "bg-[#2C353D] text-gray-400"
                      }`}
                      onClick={() => handleTagClick(tag)}
                      disabled={
                        !selectedTags.includes(tag) && selectedTags.length >= 3
                      }
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="p-2 bg-orange-500 rounded-btn hover:bg-orange-600 md:w-[150px] text-white"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {/* Post creation input */}

            <div className="flex items-center space-x-4 p-4 gap-4 bg-gray-800 rounded-[16px]">
              <Avatar>
                <AvatarImage src="/assets/forum/user1.png" alt="User Avatar" />
                <AvatarFallback>YJ</AvatarFallback>
              </Avatar>

              {editingPost ? (
                <>
                  <input
                    type="text"
                    placeholder="Editing your post..."
                    className="flex-1 bg-[#2C353D] rounded-xl p-4"
                    disabled
                  />
                  <button
                    type="button"
                    className="p-2 bg-orange-500 rounded-btn hover:bg-orange-600 md:w-[150px]"
                    onClick={() => setEditingPost(false)}
                  >
                    Discard
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Let's share what's going on your mind..."
                    className="flex-1 bg-[#2C353D] rounded-xl p-4"
                    disabled
                  />
                  <button
                    type="button"
                    className="p-2 bg-orange-500 rounded-btn hover:bg-orange-600 md:w-[150px]"
                    onClick={handleWriteClick}
                  >
                    Write a Post
                  </button>
                </>
              )}
            </div>

            {/* Conditional rendering for post list, single post view, or comment view */}
            <div
              className="max-h-[72svh] p-4 min-h-[500px] bg-gray-800 overflow-y-scroll rounded-[16px]"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {selectedPost ? (
                viewingComments ? (
                  <CommentView
                    post={selectedPost}
                    onBack={() => setViewingComments(false)}
                    onAddComment={handleAddComment}
                    postId={selectedPost.id}
                  />
                ) : editingPost ? (
                  <EditView
                    post={selectedPost}
                    fetchedTags={fetchedTags}
                    onBack={() => setEditingPost(false)}
                    onEditPost={handleEditPost}
                  />
                ) : (
                  <SinglePostView
                    post={selectedPost}
                    onToggleLike={() => toggleLike(selectedPost.id)}
                    onToggleUpVote={() => toggleUpVote(selectedPost.id)}
                    onBack={() => setSelectedPost(null)}
                    onViewComments={handleViewComments}
                    onViewEdit={handleEditView}
                  />
                )
              ) : (
                <div>
                  {posts.map((post) => (
                    <PostItem
                      key={post.id}
                      post={post}
                      onToggleLike={() => toggleLike(post.id)}
                      onToggleUpVote={() => toggleUpVote(post.id)}
                      onClick={() => handlePostClick(post)}
                      onViewComments={() => {
                        setSelectedPost(post);
                        setViewingComments(true);
                      }}
                      onViewEdit={() => {
                        setSelectedPost(post);
                        setEditingPost(true);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {!isWriting && <WriteIcon onClick={handleWriteClick} />}
      </main>

      <aside
        className="w-full md:w-1/5 max-h-full overflow-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Right sidebar */}
        <PriceWidget />
      </aside>
    </div>
  );
};

export default withAuth(Main);
