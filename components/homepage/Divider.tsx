import React from "react";
import Image from "next/image";

export default function Divider() {
  return (
    <div className="">
      <Image width={1920} height={54} src="/assets/divider-rgb.png" alt="rgb-image" />
    </div>
  );
}
