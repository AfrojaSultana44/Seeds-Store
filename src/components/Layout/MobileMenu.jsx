import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import ProductAccordion from "../shared/ProductAccordion";
import { Link } from "react-router-dom";

const MobileMenu = ({ nav, handleNav }) => {
  return (
    <>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`${
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#D6EBE4] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }  md:hidden z-[99999] overflow-y-auto`}
      >
        <div className="flex items-center border-b border-[#1D263A] border-opacity-[12%]">
          <Logo />
        </div>
        <ul className="text-[#1D263A] text-2xl gap-[16px] font-semibold px-2">
          <li className="border-b border-[#000000] border-opacity-[12%] p-4">
            <ProductAccordion />
          </li>
          <Link to={"/media-centre"}>
            <li className="border-b border-[#000000] border-opacity-[12%] p-4">
              Media Centre
            </li>
          </Link>
          <Link to={"/activity"}>
            <li className="border-b border-[#000000] border-opacity-[12%] p-4">
              Activity
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="border-b border-[#000000] border-opacity-[12%] p-4">
              About Us
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="border-b border-[#000000] border-opacity-[12%] p-4">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
