import { FiArrowUpRight } from "react-icons/fi";
import DateFormatter from "../blog/dateFormatter";

export interface Article {
  id: number;
  title: string;
  content: string;
  cover_image?: string;
  created_at: string;
}

type ArticleListProps = {
  articles: Article[];
};

const NewsList3: React.FC<ArticleListProps> = ({ articles }) => {
  const getArticle = (index: number) => articles[index] ?? null;
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 mt-4">
      {getArticle(0) && (
        <a
          className="row-span-2 col-span-1 bg-white rounded-md shadow-inner p-2"
          href={`/news/article/${articles[0]?.id}`}
        >
          <img
            src={articles[0]?.cover_image}
            className="w-full h-1/2 object-cover rounded-lg"
            alt={articles[0]?.title}
          />
          <p className="mt-2">
            <DateFormatter datetime={articles[0]?.created_at} />
          </p>
          <h6 className="h6 line-clamp-3 mt-2 pr-2">{articles[0]?.title}</h6>
          <p
            className="line-clamp-6 mt-1 pr-2 "
            dangerouslySetInnerHTML={{ __html: articles[0]?.content }}
          ></p>
        </a>
      )}
      {getArticle(1) && (
        <div className="col-span-2 row-span-1 rounded-md shadow-inner p-2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${articles[1]?.cover_image})` }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center mix-blend-plus-lighter text-white drop-shadow-md p-6 rounded-md">
            <div className="pt-6 pr-[15%]">
              <h3 className="h4 line-clamp-1">{articles[1]?.title}</h3>
              <p
                className="text-[2.5rem] line-clamp-2 "
                dangerouslySetInnerHTML={{ __html: articles[1]?.content }}
              ></p>
              <div className="flex justify-start mt-4">
                <a
                  className="flex gap-2 group"
                  href={`/news/article/${articles[1]?.id}`}
                >
                  <button className="aspect-square border flex items-center justify-center max-w-12 max-h-12 p-2 transition-all duration-300 group-hover:bg-gray-600">
                    <FiArrowUpRight className="w-8 h-10" />
                  </button>
                  <p className="my-auto transition-all duration-300 group-hover:text-gray-600">
                    Read Article
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {getArticle(2) && (
        <a
          className="bg-white rounded-md shadow-inner p-2 aspect-[1/1.2]"
          href={`/news/article/${articles[2]?.id}`}
        >
          <img
            src={articles[2]?.cover_image}
            className="w-full h-1/2 object-cover rounded-lg"
            alt={articles[2]?.title}
          />
          <p className="mt-2">
            <DateFormatter datetime={articles[2]?.created_at} />
          </p>
          <h6 className="h6 line-clamp-2 mt-2 pr-2">{articles[2]?.title}</h6>
          <p
            className="line-clamp-3 mt-1 pr-2 "
            dangerouslySetInnerHTML={{ __html: articles[2]?.content }}
          ></p>
        </a>
      )}
      {getArticle(3) && (
        <a
          className="bg-white rounded-md shadow-inner p-2 aspect-[1/1.2]"
          href={`/news/article/${articles[3]?.id}`}
        >
          <img
            src={articles[3]?.cover_image}
            className="w-full h-1/2 object-cover rounded-lg"
            alt={articles[3]?.title}
          />
          <p className="mt-2">
            <DateFormatter datetime={articles[3]?.created_at} />
          </p>
          <h6 className="h6 line-clamp-2 mt-2 pr-2">{articles[3]?.title}</h6>
          <p
            className="line-clamp-3 mt-1 pr-2 "
            dangerouslySetInnerHTML={{ __html: articles[3]?.content }}
          ></p>
        </a>
      )}
      {getArticle(4) && (
        <div className="col-span-2 row-span-1 rounded-md shadow-inner p-2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${articles[4]?.cover_image})` }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center mix-blend-plus-lighter text-white drop-shadow-md p-6 rounded-md">
            <div className="absolute bottom-15 left-6 right-6 pr-[15%]">
              <h3 className="h4 line-clamp-1">{articles[4]?.title}</h3>
              <p
                className="text-[2.5rem] line-clamp-2 "
                dangerouslySetInnerHTML={{ __html: articles[4]?.content }}
              ></p>
              <div className="flex justify-start mt-4">
                <a
                  className="flex gap-2 group"
                  href={`/news/article/${articles[4]?.id}`}
                >
                  <button className="aspect-square border flex items-center justify-center max-w-12 max-h-12 p-2 transition-all duration-300 group-hover:bg-gray-600">
                    <FiArrowUpRight className="w-8 h-10" />
                  </button>
                  <p className="my-auto transition-all duration-300 group-hover:text-gray-600">
                    Read Article
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {getArticle(5) && (
        <a
          className="bg-white rounded-md shadow-inner p-2 aspect-[1/1.2]"
          href={`/news/article/${articles[5]?.id}`}
        >
          <img
            src={articles[5]?.cover_image}
            className="w-full h-1/2 object-cover rounded-lg"
            alt={articles[5]?.title}
          />
          <p className="mt-2">
            <DateFormatter datetime={articles[5]?.created_at} />
          </p>
          <h6 className="h6 line-clamp-2 mt-2 pr-2">{articles[5]?.title}</h6>
          <p
            className="line-clamp-3 mt-1 pr-2 "
            dangerouslySetInnerHTML={{ __html: articles[5]?.content }}
          ></p>
        </a>
      )}
      {getArticle(6) && (
        <a
          className="bg-white rounded-md shadow-inner p-2 aspect-[1/1.2]"
          href={`/news/article/${articles[6]?.id}`}
        >
          <img
            src={articles[6]?.cover_image}
            className="w-full h-1/2 object-cover rounded-lg"
            alt={articles[6]?.title}
          />
          <p className="mt-2">
            <DateFormatter datetime={articles[6]?.created_at} />
          </p>
          <h6 className="h6 line-clamp-2 mt-2 pr-2">{articles[6]?.title}</h6>
          <p
            className="line-clamp-3 mt-1 pr-2 "
            dangerouslySetInnerHTML={{ __html: articles[6]?.content }}
          ></p>
        </a>
      )}
      {getArticle(7) && (
        <div className="col-span-2 row-span-2 rounded-md shadow-inner p-2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${articles[7]?.cover_image})` }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center mix-blend-plus-lighter text-white drop-shadow-md p-6 rounded-md">
            <div className="pt-6 pr-[15%]">
              <h3 className="h4 line-clamp-1">{articles[7]?.title}</h3>
              <p
                className="text-[2.5rem] line-clamp-2 "
                dangerouslySetInnerHTML={{ __html: articles[7]?.content }}
              ></p>
              <div className="flex justify-start mt-4">
                <a
                  className="flex gap-2 group"
                  href={`/news/article/${articles[7]?.id}`}
                >
                  <button className="aspect-square border flex items-center justify-center max-w-12 max-h-12 p-2 transition-all duration-300 group-hover:bg-gray-600">
                    <FiArrowUpRight className="w-8 h-10" />
                  </button>
                  <p className="my-auto transition-all duration-300 group-hover:text-gray-600">
                    Read Article
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {getArticle(8) && (
        <a
          className="bg-white rounded-md shadow-inner p-2 aspect-[1/1.2]"
          href={`/news/article/${articles[8]?.id}`}
        >
          <img
            src={articles[8]?.cover_image}
            className="w-full h-1/2 object-cover rounded-lg"
            alt={articles[8]?.title}
          />
          <p className="mt-2">
            <DateFormatter datetime={articles[8]?.created_at} />
          </p>
          <h6 className="h6 line-clamp-2 mt-2 pr-2">{articles[8]?.title}</h6>
          <p
            className="line-clamp-3 mt-1 pr-2 "
            dangerouslySetInnerHTML={{ __html: articles[8]?.content }}
          ></p>
        </a>
      )}
      {getArticle(9) && (
        <a
          className="bg-white rounded-md shadow-inner p-2 aspect-[1/1.2]"
          href={`/news/article/${articles[9]?.id}`}
        >
          <img
            src={articles[9]?.cover_image}
            className="w-full h-1/2 object-cover rounded-lg"
            alt={articles[9]?.title}
          />
          <p className="mt-2">
            <DateFormatter datetime={articles[9]?.created_at} />
          </p>
          <h6 className="h6 line-clamp-2 mt-2 pr-2">{articles[9]?.title}</h6>
          <p
            className="line-clamp-3 mt-1 pr-2 "
            dangerouslySetInnerHTML={{ __html: articles[9]?.content }}
          ></p>
        </a>
      )}
    </div>
  );
};

export default NewsList3;
