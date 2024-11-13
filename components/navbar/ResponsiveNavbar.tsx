import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import User from "./User";
import Hamburger from "./Hamburger";

const ResponsiveNavbar = () => {
  return (
    <div className="flex justify-between align-middle top-0 fixed w-[100dvw] min-h-12 max-h-12 bg-white/10 text-white text-xs px-4 z-50 shadow-lg mx-auto backdrop-blur-lg backdrop-saturate-150 backdrop-filter border border-white/20">
      <div className="my-auto">
        <Link href={"/"}>
          <img
            className=""
            src={"/images/logo.png"}
            alt="Assetra logo"
            width={70}
            height={70}
          />
        </Link>
      </div>
      <div className="my-auto">
        <NavLink />
      </div>
      <div className="my-auto flex justify-between gap-6">
        <User />
        <Hamburger />
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
