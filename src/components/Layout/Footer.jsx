import React from "react";

const Footer = () => {
  return (
    <div className="w-full max-w-[1160px] mx-auto pt-[60px]">
      <div className="flex justify-between border-b border-[#979797] border-opacity-[20%] pb-10">
        <div className="flex justify-between flex-col">
          <div>
            <img src="/images/Union.svg" alt="logo" />
          </div>
          <div className="flex items-center w-[190px] h-[50px] mt-[19px]">
            <div>
              <img src="images/Group76.svg" alt="fb" />
            </div>
            <div>
              <img src="images/Group12.svg" alt="youtube" />
            </div>
          </div>
        </div>
        <div className="text-[#0A142F]">
          <h6 className="text-[18px] leading-[22.5px] font-medium">
            Quick Links
          </h6>
          <div className="flex justify-between mt-[20px]">
            <ul className="text-[14px] leading-[30px] font-normal">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Media Center</li>
              <li>Download Files</li>
            </ul>
          </div>
        </div>
        <div className="text-[#0A142F]">
          <h6 className="text-[18px] leading-[22.5px] font-medium">
            Running Products
          </h6>
          <div className="flex justify-between mt-[20px]">
            <ul className="text-[14px] leading-[30px] font-normal">
              <li>Seeds</li>
              <li>Fertilizer</li>
              <li>Pesticide</li>
            </ul>
          </div>
        </div>
        <div>
          <h6 className="text-[18px] leading-[22.5px] font-medium mb-[20px]">
            Download App
          </h6>
          <img className="w-[180px] h-[49px]" src="images/Group.svg" alt="" />
        </div>
      </div>
      <p className="text-center text-[#0A142F] text-[14px] leading-[17.5px] font-normal my-[30px] opacity-[65%]">
        © 2024 Rasel Seeds | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
