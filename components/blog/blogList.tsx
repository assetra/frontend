import React from "react";
import DateFormatter from "./dateFormatter";
import TeamUrl from "./teamUrl";
import TeamName from "./teamName";

export interface Blog {
  id: number;
  author: string;
  title: string;
  content: string;
  image?: string;
  tags?: string;
  created_at: string;
}

type BlogListProps = {
  blogs: Blog[];
};

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
            <a className="flex align-middle gap-1" href={`/blog/author/${blog.author}`}>
              <TeamUrl pen={blog.author} />
              <TeamName pen={blog.author} />
            </a>
            <p className="text-sm text-right">
              <DateFormatter datetime={blog.created_at} />
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BlogList;
