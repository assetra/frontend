"use client";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import DateFormatter from "../blog/dateFormatter";

export interface Article {
  id: number;
  title: string;
  content: string;
  cover_image?: string;
  created_at: string;
}

export interface Patch {
  id: number;
  version: string;
  build?: string;
  content: string;
  created_at: string;
  is_latest?: boolean;
}

const testArticles: Article[] = [
  {
    id: 10,
    title: "Exploring the Future of AI",
    content:
      "Artificial Intelligence has been at the forefront of technological advancements, and its future seems more promising than ever. In this article, we will delve into the emerging trends, opportunities, and challenges that AI will bring in the coming years, and how it will impact industries across the globe.",
    cover_image: "/assets/pic1.jpg",
    created_at: "2024-10-10T10:30:00Z",
  },
  {
    id: 20,
    title: "The Evolution of Blockchain",
    content:
      "Blockchain technology, once synonymous with cryptocurrencies like Bitcoin, has now expanded far beyond financial applications. It is rapidly transforming sectors such as supply chain management, healthcare, and even governance by providing unparalleled security and transparency.",
    cover_image: "/assets/pic6.jpg",
    created_at: "2024-10-11T09:45:00Z",
  },
  {
    id: 30,
    title: "Sustainability in Tech",
    content:
      "As climate change continues to be a major global concern, the tech industry is stepping up to reduce its carbon footprint. This article explores how companies are adopting sustainable practices through renewable energy sources, greener data centers, and innovations that promote environmental sustainability.",
    cover_image: "/assets/pic1.png",
    created_at: "2024-10-12T14:15:00Z",
  },
  {
    id: 40,
    title: "Cybersecurity Trends in 2024",
    content:
      "In a world where cyber threats are evolving rapidly, staying ahead of potential risks is crucial for both businesses and individuals. This piece highlights the top cybersecurity trends of 2024, providing insights on how to protect sensitive data from increasingly sophisticated attacks.",
    cover_image: "/assets/pic3.jpg",
    created_at: "2024-10-13T11:00:00Z",
  },
];

const testPatches: Patch[] = [
  {
    id: 10,
    version: "version 03.96",
    content:
      "Artificial Intelligence has been at the forefront of technological advancements, and its future seems more promising than ever. In this article, we will delve into the emerging trends, opportunities, and challenges that AI will bring in the coming years, and how it will impact industries across the globe.",
    created_at: "2024-10-10T10:30:00Z",
  },
  {
    id: 20,
    version: "version 03.97",
    content:
      "Blockchain technology, once synonymous with cryptocurrencies like Bitcoin, has now expanded far beyond financial applications. It is rapidly transforming sectors such as supply chain management, healthcare, and even governance by providing unparalleled security and transparency.",
    created_at: "2024-10-11T09:45:00Z",
  },
  {
    id: 30,
    version: "version 03.93",
    content:
      "As climate change continues to be a major global concern, the tech industry is stepping up to reduce its carbon footprint. This article explores how companies are adopting sustainable practices through renewable energy sources, greener data centers, and innovations that promote environmental sustainability.",
    created_at: "2024-10-12T14:15:00Z",
  },
];

const Main = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [patches, setPatches] = useState<Patch[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const removeStyles = (html: string) => {
    return html
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "") // Remove <style> blocks
      .replace(/\s*style=["'][^"']*["']/gi, "") // Remove inline styles
      .replace(/\s*class=["'][^"']*["']/gi, "") // Remove class attributes
      .replace(/<span[^>]*>/gi, "<span>"); // Remove all attributes from <span> tags
  };

  const sanitizeArticles = (articles: Article[]) => {
    return articles.map((article) => ({
      ...article,
      content: article.content ? removeStyles(article.content) : "",
    }));
  };

  const sanitizePatches = (patches: Patch[]) => {
    return patches.map((patch) => ({
      ...patch,
      content: patch.content ? removeStyles(patch.content) : "",
    }));
  };

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        "https://gtxadmin.pythonanywhere.com/api/news",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      let articles = sanitizeArticles(data.articles as Article[]);
      let patches = sanitizePatches(data.patches as Patch[]);

      // If fetched articles are less than 4, append from testArticles
      if (articles.length < 4) {
        const missingCount = 4 - articles.length;
        // Append from testArticles, slicing to get the necessary number of items
        articles = [...articles, ...testArticles.slice(0, missingCount)];
      }

      if (patches.length < 3) {
        const missingCount = 3 - patches.length;
        // Append from testPatches, slicing to get the necessary number of items
        patches = [...patches, ...testPatches.slice(0, missingCount)];
      }

      setArticles(articles);
      setPatches(patches);
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
    return <div className="mt-32">Loading...</div>;
  }

  if (error) {
    return <div className="mt-32">Error: {error}</div>;
  }

  if (!articles || articles.length === 0) {
    return <div className="mt-32">No articles found.</div>;
  }
  return (
    <div className="relative h-[100dvh]">
      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
        src="/assets/pic5.jpg"
        title="Assetra"
      />

      {/* Main Content */}
      <div className="container relative z-10 pr-0 md:flex justify-between md:h-[100dvh] pb-16 pt-[10%]">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="pr-[15%]">
            <h3 className="h4">{articles[0]?.title}</h3>
            <p
              className="text-[2.5rem] line-clamp-2 "
              dangerouslySetInnerHTML={{ __html: articles[0]?.content }}
            ></p>
            <div className="flex justify-start mt-4">
              <a
                className="flex gap-2 group"
                href={`/news/article/${articles[0]?.id}`}
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
          <div className="flex flex-wrap justify-start gap-6 mt-3">
            {/* Card 1 */}
            <a
              className="max-w-[180px]"
              href={`/news/article/${articles[1]?.id}`}
            >
              <div className="w-[180px] h-[100px] rounded-lg overflow-hidden">
                <img
                  src={articles[1]?.cover_image}
                  className="w-full h-full object-cover rounded-lg"
                  alt={articles[1]?.title}
                />
              </div>
              <h6
                className="h6 line-clamp-2 mt-1 pr-2 "
                dangerouslySetInnerHTML={{ __html: articles[1]?.content }}
              ></h6>
              <p>
                <DateFormatter datetime={articles[1]?.created_at} />
              </p>
            </a>

            {/* Card 2 */}
            <a
              className="max-w-[180px]"
              href={`/news/article/${articles[2]?.id}`}
            >
              <div className="w-[180px] h-[100px] rounded-lg overflow-hidden">
                <img
                  src={articles[2]?.cover_image}
                  className="w-full h-full object-cover rounded-lg"
                  alt={articles[2]?.title}
                />
              </div>
              <h6
                className="h6 line-clamp-2 mt-1 pr-2 "
                dangerouslySetInnerHTML={{ __html: articles[2]?.content }}
              ></h6>
              <p>
                <DateFormatter datetime={articles[2]?.created_at} />
              </p>
            </a>

            {/* Card 3 */}
            <a
              className="max-w-[180px] hidden md:block"
              href={`/news/article/${articles[3]?.id}`}
            >
              <div className="w-[180px] h-[100px] rounded-lg overflow-hidden">
                <img
                  src={articles[3]?.cover_image}
                  className="w-full h-full object-cover rounded-lg"
                  alt={articles[3]?.title}
                />
              </div>
              <h6
                className="h6 line-clamp-2 mt-1 pr-2"
                dangerouslySetInnerHTML={{ __html: articles[3]?.content }}
              ></h6>
              <p>
                <DateFormatter datetime={articles[3]?.created_at} />
              </p>
            </a>
          </div>

          <div className="flex justify-start mt-10 min-h-16">
            <a
              href="/news/article"
              className="flex items-center gap-2 mx-auto group transition-all duration-300 transform hover:gap-6"
            >
              <button className="w-10 h-10 rounded-full border-2 flex items-center justify-center p-2 transition-all duration-300 group-hover:w-14 group-hover:h-14  group-hover:bg-gray-600">
                <FaPlus className="transition-all duration-300 group-hover:scale-125" />
              </button>
              <p className="transition-all duration-300 transform group-hover:scale-125">
                View More
              </p>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 md:grid gap-4 hidden">
          <div className="col-span-1"></div>
          {patches?.map((patch) => (
            <a
              key={patch.id}
              href={`/news/patch/${patch.id}`}
              className="flex justify-between gap-6 row-span-1 w-9/12 max-h-[120px] mx-auto bg-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] rounded-lg transition-all duration-300 hover:bg-blue-900/25"
            >
              <div className="aspect-square w-[150px] rounded-l-lg">
                <img
                  src="/assets/patch.png"
                  className="w-full h-full object-cover rounded-l-lg"
                  alt="Patch Note"
                />
              </div>
              <div className="pt-4">
                <h6 className="h6 text-black">{patch.version}</h6>
                <h6
                  className="h6 line-clamp-2 pr-4 "
                  dangerouslySetInnerHTML={{ __html: patch.content }}
                ></h6>
              </div>
            </a>
          ))}
          <div className="flex justify-start mt-10 min-h-16">
            <a
              href="/news/patch"
              className="flex items-center gap-2 mx-auto group transition-all duration-300 transform hover:gap-6"
            >
              <button className="w-10 h-10 rounded-full border-2 flex items-center justify-center p-2 transition-all duration-300 group-hover:w-14 group-hover:h-14 group-hover:bg-gray-600">
                <FaPlus className="transition-all duration-300 group-hover:scale-125" />
              </button>
              <p className="transition-all duration-300 transform group-hover:scale-125">
                View More
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
