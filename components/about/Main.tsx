"use client";
import { useState } from "react";
import Background from "../../public/assets/bg-image.png";
import Legal from "./Legal";
import Team from "./Team";
import Work from "./Work";
import { useSearchParams } from "next/navigation";

const Main = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() ?? "team";

  // Allowed categories
  const validCategories = ["team", "work", "legal"];

  // Ensure the initial state is valid
  const initialComponent = validCategories.includes(query) ? query : "team";

  const [component, setComponent] = useState<string>(initialComponent);

  const handleClick = (q: string) => {
    const lowerQ = q.toLowerCase();
    if (validCategories.includes(lowerQ)) {
      setComponent(lowerQ);
    }
  };
  return (
    <div className="about-container">
      <div className="sub-nav">
        <button
          type="button"
          onClick={() => handleClick("team")}
          className={component === "team" ? "border-b-4 border-white" : ""}
        >
          TEAM
        </button>
        <button
          type="button"
          onClick={() => handleClick("work")}
          className={component === "work" ? "border-b-4 border-white" : ""}
        >
          WORK WITH US
        </button>
        <button
          type="button"
          onClick={() => handleClick("legal")}
          className={component === "legal" ? "border-b-4 border-white" : ""}
        >
          LEGAL
        </button>
      </div>
      <main className="about-body ">
        {component === "team" && <Team />}
        {component === "work" && <Work />}
        {component === "legal" && <Legal />}
      </main>
      <div
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100dvw",
          height: "100dvh",
        }}
      ></div>
    </div>
  );
};

export default Main;
