import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#D6EBE4] border-b border-[#1D263A] border-opacity-[12%]">
      <div className="w-full max-w-[1160px] mx-auto flex justify-between items-center">
        <Logo />
        <DesktopMenu />
        <MobileMenu nav={nav} handleNav={handleNav} />
      </div>
    </div>
  );
};

export default Header;
