import React from "react";

const Footer = () => {
  return (
    <div className="w-full max-w-[1160px] mx-auto pt-[60px]">
      <div className="w-full flex border-b border-[#979797] border-opacity-[20%] pb-10 gap-3">
        <div className="basis-[calc(25%-9px)] shrink-0">
          <div>
            <img src="/images/Union.svg" alt="logo" />
          </div>
          <div className="flex">
            <div>
              <img src="/images/Group76.svg" alt="fb" />
            </div>
            <div>
              <img src="/images/Group12.svg" alt="youtube" />
            </div>
          </div>
        </div>
        <div className=" basis-[calc(25%-9px)] shrink-0 text-[#0A142F]">
          <h6 className="text-[18px] leading-[22.5px] font-medium">
            Quick Links
          </h6>
          <div className="flex justify-between pt-[20px]">
            <ul className="text-[14px] leading-[30px] font-normal">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Media Center</li>
              <li>Download Files</li>
            </ul>
          </div>
        </div>
        <div className="basis-[calc(25%-9px)] shrink-0 text-[#0A142F]">
          <h6 className="text-[18px] leading-[22.5px] font-medium">
            Running Products
          </h6>
          <div className="flex justify-between pt-[20px]">
            <ul className="text-[14px] leading-[30px] font-normal">
              <li>Seeds</li>
              <li>Fertilizer</li>
              <li>Pesticide</li>
            </ul>
          </div>
        </div>
        <div className="basis-[calc(25%-9px)] shrink-0">
          <h6 className="text-[18px] leading-[22.5px] font-medium pb-[20px]">
            Download App
          </h6>
          <img className="w-[180px] h-[49px]" src="/images/Group.svg" alt="" />
        </div>
      </div>
      <p className="text-center text-[#0A142F] text-[14px] leading-[17.5px] font-normal my-[30px] opacity-[65%]">
        © 2024 Rasel Seeds | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
