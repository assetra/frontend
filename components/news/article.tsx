"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DateFormatter from "../blog/dateFormatter";

export interface Article {
  id: number;
  title: string;
  content: string;
  cover_image?: string;
  created_at: string;
}

type ArticleProps = {
  article: Article;
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  const next = article.id + 1;
  const previous = article.id - 1;

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
              <img
                src={`https://gtxadmin.pythonanywhere.com/media/article_images/assetra_cover.jpg`}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
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
