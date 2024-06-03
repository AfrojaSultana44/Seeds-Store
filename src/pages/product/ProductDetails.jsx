import React from "react";

const ProductDetails = () => {
  return (
    <div className="border border-red-500 p-5">
      <div className="flex justify-between">
        <div className="basis-[50%] shrink-0 bg-[#116D48]">
          <img src="/images/image9.png" alt="Samrat" />
        </div>
        <div className="basis-[50%] shrink-0">
          <div className="max-w-[392px] mx-auto">
            <h1 className="text-[#116D48] text-[64px] leading-[72px] tracking-[-1px] font-bold">
              সম্রাট{" "}
            </h1>
            <p className="text-[#262729] text-opacity-[70%] text-[17px] leading-[30px]">
              Samrat Hybrid Maize Features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
