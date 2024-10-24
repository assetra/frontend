"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DateFormatter from "../blog/dateFormatter";

type ArticleProps = {
  id: number;
};

export interface Article {
  id: number;
  title: string;
  content: string;
  cover_image?: string;
  created_at: string;
}

const Article: React.FC<ArticleProps> = ({ id }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const next = Number(id) + 1;
  const previous = Number(id) - 1;

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/api/article/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      setError("Failed to fetch posts");
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return <div>No Article found.</div>;
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto mt-16 bg-blue-900/25 backdrop-blur-md shadow-lg text-white rounded-lg overflow-hidden">
        <div className="p-6">
          <header className="mb-4">
            <h1 className="text-3xl font-bold mb-3">{article.title}</h1>
            <p className="text-sm text-blue-300">
              <DateFormatter datetime={article.created_at} />
            </p>
          </header>

          <div className="mb-6">
            {article.cover_image ? (
              <img
                src={`https://gtxadmin.pythonanywhere.com${article.cover_image}`}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <div className="rounded-xl aspect-video w-[100%] bg-gray-300">
                No image available
              </div>
            )}
          </div>

          <article className="text-gray-700 leading-relaxed">
            <div
              className="mt-6 prose"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center mx-auto mt-10 min-h-16">
        {previous == 0 ? (
          <div className="min-w-14">
            <button
              disabled
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center p-2 "
            >
              <MdKeyboardArrowLeft />
            </button>
          </div>
        ) : (
          <a
            href={`/news/article/${previous}`}
            className="group transition-all duration-300 transform  min-w-14"
          >
            <button className="w-10 h-10 rounded-full border-2 flex items-center justify-center p-2 transition-all duration-300 group-hover:w-14 group-hover:h-14 group-hover:bg-gray-600">
              <MdKeyboardArrowLeft className="transition-all duration-300 group-hover:scale-125" />
            </button>
          </a>
        )}
        <a
          href={`/news/article/${next}`}
          className="group transition-all duration-300 transform  min-w-14"
        >
          <button className="w-10 h-10 rounded-full border-2 flex items-center justify-center p-2 transition-all duration-300 group-hover:w-14 group-hover:h-14 group-hover:bg-gray-600">
            <MdKeyboardArrowRight className="transition-all duration-300 group-hover:scale-125" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Article;
