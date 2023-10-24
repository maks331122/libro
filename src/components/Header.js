import React from "react";
import { useMediaQuery } from "react-responsive";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";


const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div>
      {isMobile ? (
        <HeaderMobile/>
      ) : (
        <HeaderDesktop/>
      )}
    </div>
  );
};

export default Header;
