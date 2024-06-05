import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#D6EBE4] border border-b-[#1D263A] border-opacity-[12%]">
      <div className="w-full max-w-[1160px] mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center py-4">
            <img
              src="/images/Subtract.png"
              alt="logo"
              className="w-[56px] h-[58px] rounded"
            />
            <span className="w-full text-[#116D48] text-[20px] leading-[20px] font-semibold ms-3">
              <p>RASEL</p>
              <p>SEEDS</p>
            </span>
          </div>
        </Link>

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

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={`${
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-1  bg-[#D6EBE4] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }  md:hidden`}
        >
          <div className="flex items-center m-8 border-b border-gray-400">
            <img
              src="/images/Subtract.png"
              alt="logo"
              className="w-[56px] h-[58px] rounded"
            />
            <span className="w-full text-xl font-semibold text-[#116D48] ms-4">
              <p>RASEL</p>
              <p>SEEDS</p>
            </span>
          </div>
          <ul className=" text-[#1D263A] text-2xl gap-[16px] font-semibold px-2">
            <li className="border-b border-gray-400 p-4">Products</li>
            <li className="border-b border-gray-400 p-4">Media Centre</li>
            <li className="border-b border-gray-400 p-4">Activity</li>
            <li className="border-b border-gray-400 p-4">About Us</li>
            <li className="border-b border-gray-400 p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
