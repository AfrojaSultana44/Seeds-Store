import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
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
    </div>
  );
};

export default Logo;
