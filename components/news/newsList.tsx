"use client";
import React, { useEffect, useState } from "react";
import NewsList1 from "./newsList1";
import NewsList2 from "./newsList2";
import NewsList3 from "./newsList3";
import { FaPlus } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

export interface Article {
  id: number;
  title: string;
  content: string;
  cover_image?: string;
  created_at: string;
}

const testArticles: Article[] = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    content:
      "Artificial Intelligence has been at the forefront of technological advancements, and its future seems more promising than ever. In this article, we will delve into the emerging trends, opportunities, and challenges that AI will bring in the coming years, and how it will impact industries across the globe.",
    cover_image: "/assets/pic1.jpg",
    created_at: "2024-10-10T10:30:00Z",
  },
  {
    id: 2,
    title: "The Evolution of Blockchain",
    content:
      "Blockchain technology, once synonymous with cryptocurrencies like Bitcoin, has now expanded far beyond financial applications. It is rapidly transforming sectors such as supply chain management, healthcare, and even governance by providing unparalleled security and transparency.",
    cover_image: "/assets/pic2.jpg",
    created_at: "2024-10-11T09:45:00Z",
  },
  {
    id: 3,
    title: "Sustainability in Tech",
    content:
      "As climate change continues to be a major global concern, the tech industry is stepping up to reduce its carbon footprint. This article explores how companies are adopting sustainable practices through renewable energy sources, greener data centers, and innovations that promote environmental sustainability.",
    cover_image: "/assets/pic1.png",
    created_at: "2024-10-12T14:15:00Z",
  },
  {
    id: 4,
    title: "Cybersecurity Trends in 2024",
    content:
      "In a world where cyber threats are evolving rapidly, staying ahead of potential risks is crucial for both businesses and individuals. This piece highlights the top cybersecurity trends of 2024, providing insights on how to protect sensitive data from increasingly sophisticated attacks.",
    cover_image: "/assets/pic3.jpg",
    created_at: "2024-10-13T11:00:00Z",
  },
  {
    id: 5,
    title: "The Future of Remote Work",
    content:
      "The COVID-19 pandemic has permanently changed how businesses operate, with remote work becoming the new normal. This article examines the long-term effects of this shift, how companies are adapting to a hybrid work environment, and what the future holds for remote work as technology continues to evolve.",
    cover_image: "/assets/pic4.jpg",
    created_at: "2024-10-14T08:30:00Z",
  },
  {
    id: 6,
    title: "Cloud Computing: What's Next?",
    content:
      "Cloud computing has revolutionized how businesses manage their operations and data. As more companies move to the cloud, we look at the future of this technology, focusing on the innovations and developments that are driving its evolution in sectors such as artificial intelligence, edge computing, and beyond.",
    cover_image: "/assets/pic1.png",
    created_at: "2024-10-15T13:45:00Z",
  },
  {
    id: 7,
    title: "Quantum Computing: A New Era",
    content:
      "Quantum computing promises to solve complex problems that are beyond the reach of traditional computers. In this article, we break down the basics of quantum computing, its potential applications in fields like cryptography and drug discovery, and the challenges that must be overcome for it to reach its full potential.",
    cover_image: "/assets/pic5.jpg",
    created_at: "2024-10-16T15:20:00Z",
  },
  {
    id: 8,
    title: "5G: The Revolution in Connectivity",
    content:
      "With the rollout of 5G networks across the globe, the way we connect and interact with the digital world is changing dramatically. This article explores how 5G will revolutionize industries such as telecommunications, healthcare, and smart cities, offering unprecedented speed and connectivity.",
    cover_image: "/assets/pic6.jpg",
    created_at: "2024-10-17T09:00:00Z",
  },
  {
    id: 9,
    title: "Artificial Intelligence in Healthcare",
    content:
      "AI is transforming the healthcare industry by enabling faster diagnosis, personalized treatments, and more efficient healthcare delivery. This article discusses the numerous ways AI is revolutionizing healthcare, from medical imaging to robotic surgery, and the ethical implications of its use.",
    cover_image: "/assets/pic1.png",
    created_at: "2024-10-18T07:15:00Z",
  },
  {
    id: 10,
    title: "Digital Transformation in Business",
    content:
      "Businesses worldwide are embracing digital transformation to remain competitive in an ever-changing market. This article outlines the key technologies driving this transformation, including automation, cloud computing, and artificial intelligence, and how companies can leverage them to streamline operations and enhance customer experiences.",
    cover_image: "/assets/pic1.jpg",
    created_at: "2024-10-19T12:30:00Z",
  },
];

const NewsList = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [randomComponent, setRandomComponent] = useState<number>(1);
  const searchParams = useSearchParams();
  const limit = searchParams.get("l") ?? "";
  const limitNumber = parseInt(limit, 10) || 10;

  const fetchArticle = async () => {
    try {
      // Construct the URL with the limit parameter if it exists
      const url = new URL(`https://gtxadmin.pythonanywhere.com/api/articles`);
      if (limit) {
        url.searchParams.append("limit", limit);
      }
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      let articles = data;

      // If fetched articles are less than 10, append from testArticles
      if (articles.length < 10) {
        const missingCount = 10 - articles.length;
        // Append from testArticles, slicing to get the necessary number of items
        articles = [...articles, ...testArticles.slice(0, missingCount)];
      }

      setArticles(articles);

      const randomNumber = Math.floor(Math.random() * 3) + 1;
      setRandomComponent(randomNumber);
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
    <div className="container h-[90dvh] mt-16 bg-blue-900/25 backdrop-blur-[4px] rounded-lg overflow-y-auto scrollbar-hide text-gray-800">
      {randomComponent === 1 && <NewsList1 articles={articles} />}
      {randomComponent === 2 && <NewsList2 articles={articles} />}
      {randomComponent === 3 && <NewsList3 articles={articles} />}
      <div className="flex justify-center mt-6 min-h-20 text-white">
        <a
          className="flex items-center gap-2 mx-auto group transition-all duration-300 transform hover:gap-6"
          href={`/news/article?l=${limitNumber + 10}`}
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
  );
};

export default NewsList;
