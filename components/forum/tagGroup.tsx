import React, { memo } from 'react';
import { FaBitcoin, FaJsSquare, FaPaintBrush, FaLightbulb, FaBook, FaBriefcase, FaBlog } from "react-icons/fa";
import { IconType } from "react-icons";
interface TagGroupItemProps {
    item: string;
    postCount: number;
  }
  
const getIconComponent = (tag: string): IconType => {
    switch (tag.toLowerCase()) {
      case '#javascript':
        return FaJsSquare;
      case '#bitcoin':
        return FaBitcoin;
      case '#design':
        return FaPaintBrush;
      case '#innovation':
        return FaLightbulb;
      case '#tutorial':
        return FaBook;
      case '#business':
        return FaBriefcase;
      case '#blogging':
        return FaBlog;
      default:
        return FaBitcoin;
    }
  };
  const TagGroupItem: React.FC<TagGroupItemProps> = memo(({ item, postCount }) => {
    const IconComponent = getIconComponent(item);
    return (
      <div className="flex gap-4 items-center mt-2 rounded-lg">
        <div className="w-12 h-12 bg-[#5A4F43] rounded-[16px] flex items-center justify-center">
          <IconComponent size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">{item}</span>
          <div className="text-xs flex">
            <span className="text-gray-400">{postCount} Posted by this tag</span>
          </div>
        </div>
      </div>
    );
  });
  export default TagGroupItem;