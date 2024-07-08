import React from "react";
import Image from "next/image";

const BottomRightDiv: React.FC = () => {
  return (
    <div
      className="tooltip tooltip-left fixed bottom-6 right-6 p-4 rounded-full bg-base-content text-base-content cursor-pointer"
      data-tip="I'm not born yet..!"
    >
      <Image width={25} height={25} src="/assets/Gnosis.png" alt="cr-logo" />
    </div>
  );
};

export default BottomRightDiv;
