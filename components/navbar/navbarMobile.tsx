import { AuthContext } from "@/context/AddContext";
import { useContext } from "react";

const NavbarMobile = () => {
  const appContext = useContext(AuthContext);
  const onChangeMobileState = (value: number) => {
    appContext.setNavbarState(value);
  };

  return <div className="h-0"></div>;
};

export default NavbarMobile;
