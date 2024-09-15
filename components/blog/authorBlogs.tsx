import React from "react";
import TeamUrl from "./teamUrl";
import DateFormatter from "./dateFormatter";

export interface Blog {
  id: number;
  author: string;
  title: string;
  content: string;
  image?: string;
  tags?: string;
  created_at: string;
}

type AuthorBlogsProps = {
  blogs: Blog[];
};

const AuthorBlogs: React.FC<AuthorBlogsProps> = ({ blogs }) => {
  return (
    <div className="p-6 bg-base-300 rounded-xl mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <a className="card glass" key={index} href={`/blog/${blog.id}`}>
            <figure>
              <img src={blog.image} alt={blog.title} className="aspect-video" />
            </figure>
            <div className="card-body">
              <div className="flex justify-start">
                {blog.tags &&
                  blog.tags.split(",").map((tag) => (
                    <span
                      key={tag}
                      className="mr-2 text-[#4B6BFB] badge badge-outline text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <h2
                className="card-title aspect-video overflow-hidden"
                title={blog.title}
              >
                {blog.title}
              </h2>
              <p className="text-sm text-right">
                <DateFormatter datetime={blog.created_at} />
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AuthorBlogs;
