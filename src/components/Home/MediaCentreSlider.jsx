import React from "react";

const MediaCentreSlider = () => {
  return (
    <div className="bg-[#D6EBE4]">
      <div className="w-full max-w-[1160px] mx-auto">
        <div className="text-[#1D263A] flex flex-col justify-between items-center">
          <div>
            <h2 className="font-semibold text-[60px] leading-[66px] pt-[111px]">
              Media Centre
            </h2>
          </div>
          <div className="px-[200px]">
            <p className="text-[16px] leading-[22px] font-normal pt-[23px]">
              Discover the latest in agricultural innovation with Rasel Seeds.
              Explore press releases, industry articles, and multimedia content
              on advanced seed technologies and sustainable farming. Stay
              updated with farmer testimonials, agricultural fairs, product
              launches, and our dynamic employee culture. See how Rasel Seeds is
              shaping the future of farming with excellence.
            </p>
          </div>
        </div>

        <div className="mt-[62px] pb-[117px] text-center">
          <button className="text-[#116D48] font-semibold text-lg border border-[#146A47] rounded-xl py-[20px] px-[80px]">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaCentreSlider;
