import React from "react";
import Image from "next/image";
import Background from "../../public/assets/background.png";

export default function Divider() {
  return (
    <div
      className="mt-16"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        width={1920}
        height={54}
        src="/assets/divider-rgb.png"
        alt="rgb-image"
      />
    </div>
  );
}
