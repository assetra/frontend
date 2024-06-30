import React, { useState } from "react";
import Image from "next/image";

interface Networks {
  name: string;
  initial: string;
  image: string;
}

interface InlineDivsProps {
  divContents: Networks[];
  grid: string;
}

const InlineDivs: React.FC<InlineDivsProps> = ({ divContents, grid }) => {
  // State to track which div is clicked
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Click handler
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`grid grid-cols-${grid} gap-4 items-center`}>
      {activeIndex === null ? (
        divContents.map((content, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="cursor-pointer mx-auto text-center items-center"
          >
            <Image
              width={50}
              height={50}
              src={content.image}
              alt={`image-${index}`}
              className="flex mx-auto"
            />
            <p>{content.initial}</p>
          </div>
        ))
      ) : (
        <div className={`col-span-${grid} flex w-full gap-4`}>
            <Image
              width={50}
              height={50}
              src={divContents[activeIndex].image}
              alt={divContents[activeIndex].initial}
            />
          <p className="flex my-auto">{divContents[activeIndex].name}</p>
        </div>
      )}
    </div>
  );
};

export default InlineDivs;
