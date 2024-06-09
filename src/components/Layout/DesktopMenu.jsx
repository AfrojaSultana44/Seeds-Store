import React from "react";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <div>
      <ul className="hidden md:flex text-[#1D263A] text-[17px] leading-[30px] gap-10 font-semibold">
        <li className="flex justify-center items-center">
          Products
          <div className="pl-2">
            <img
              src="/images/Vector.png"
              alt="icon"
              className="w-[10.68px] h-[6.02px]"
            />
          </div>
        </li>

        <Link to={"/media-centre"}>
          <li>Media Centre</li>
        </Link>

        <Link to={"/activity"}>
          <li>Activity</li>
        </Link>

        <Link to={"/about"}>
          <li>About Us</li>
        </Link>

        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default DesktopMenu;
