import Image from "next/image";

export default function Divider() {
  return (
    <div className="mt-16 w-[100dvw] -ml-4 sm:-ml-6 lg:-ml-8">
      <Image
        width={2000}
        height={54}
        src="/assets/divider-rgb.png"
        alt="rgb-image"
      />
    </div>
  );
}
