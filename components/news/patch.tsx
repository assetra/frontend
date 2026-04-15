"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DateFormatter from "../blog/dateFormatter";

type PatchProps = {
  id: number;
};

export interface Patch {
  id: number;
  version: string;
  build: string;
  content: string;
  created_at: string;
  is_latest: boolean;
}

const patch: React.FC<PatchProps> = ({ id }) => {
  const [patch, setPatch] = useState<Patch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const next = Number(id) + 1;
  const previous = Number(id) - 1;

  const fetchPatch = async () => {
    try {
      const response = await fetch(
        `https://gtxadmin.pythonanywhere.com/api/patch/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPatch(data);
    } catch (error) {
      setError("Failed to fetch posts");
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patch) {
    return <div>No Patch found.</div>;
  }

  return (
    <div className="container h-[90dvh] mt-16 bg-blue-900/25 backdrop-blur-md rounded-lg overflow-y-auto scrollbar-hide text-white pt-8 px-8">
      <header className="mb-8">
        <h4 className="flex justify-start  gap-2 text-3xl font-bold border-b border-white pb-2 mb-6">
          <p>{patch.version}</p>
          {patch.is_latest ? (
            <span className="badge bg-blue-500">Latest</span>
          ) : (
            <span className="badge bg-gray-600">Legacy</span>
          )}
        </h4>
        <h6 className="text-lg font-medium text-blue-300">
          <DateFormatter datetime={patch.created_at} />
        </h6>
      </header>

      <section className="mb-4">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: patch.content }}
        />
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
              href={`/news/patch/${previous}`}
              className="group transition-all duration-300 transform  min-w-14"
            >
              <button className="w-10 h-10 rounded-full border-2 flex items-center justify-center p-2 transition-all duration-300 group-hover:w-14 group-hover:h-14 group-hover:bg-gray-600">
                <MdKeyboardArrowLeft className="transition-all duration-300 group-hover:scale-125" />
              </button>
            </a>
          )}
          {patch.is_latest ? (
            <div className="min-w-14">
              <button
                disabled
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center p-2"
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          ) : (
            <a
              href={`/news/patch/${next}`}
              className="group transition-all duration-300 transform  min-w-14"
            >
              <button className="w-10 h-10 rounded-full border-2 flex items-center justify-center p-2 transition-all duration-300 group-hover:w-14 group-hover:h-14 group-hover:bg-gray-600">
                <MdKeyboardArrowRight className="transition-all duration-300 group-hover:scale-125" />
              </button>
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default patch;
