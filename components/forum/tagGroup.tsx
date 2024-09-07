import React, { memo } from "react";
import {
  FaBitcoin,
  FaJsSquare,
  FaPaintBrush,
  FaLightbulb,
  FaBook,
  FaBriefcase,
  FaBlog,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface TagGroupItemProps {
  item: string;
  postCount: number;
  onClick: (tag: string) => void;
}

const getIconComponent = (tag: string): IconType => {
  switch (tag.toLowerCase()) {
    case "#javascript":
      return FaJsSquare;
    case "#bitcoin":
      return FaBitcoin;
    case "#design":
      return FaPaintBrush;
    case "#innovation":
      return FaLightbulb;
    case "#tutorial":
      return FaBook;
    case "#business":
      return FaBriefcase;
    case "#blogging":
      return FaBlog;
    default:
      return FaBitcoin;
  }
};

const TagGroupItem: React.FC<TagGroupItemProps> = memo(
  ({ item, postCount, onClick }) => {
    const IconComponent = getIconComponent(item);

    return (
      <div
        className="flex gap-4 items-center mt-2 rounded-xl cursor-pointer hover:bg-gray-700 p-2"
        onClick={() => onClick(item)}
      >
        <div className="w-10 h-10 bg-[#5A4F43] rounded-[16px] flex items-center justify-center">
          <IconComponent size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{item}</span>
          {/* Right sidebar 
          <div className="text-xs flex">
            <span className="text-xs text-gray-400">{postCount} posts</span>
          </div>
          */}
        </div>
      </div>
    );
  }
);

export default TagGroupItem;
