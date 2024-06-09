import React, { useState } from "react";

const ActivityPage = () => {
  const [sliderImages, setSliderImages] = useState([
    {
      src: "/images/pic1.svg",
      date: "June 5, 2024",
      title: "Title of the article",
    },
    {
      src: "/images/pic2.svg",
      date: "June 5, 2024",
      title: "Title of the article",
    },
    {
      src: "/images/pic3.svg",
      date: "June 5, 2024",
      title: "Title of the article",
    },
    {
      src: "/images/pic1.svg",
      date: "June 5, 2024",
      title: "Title of the article",
    },
    {
      src: "/images/pic2.svg",
      date: "June 5, 2024",
      title: "Title of the article",
    },
    {
      src: "/images/pic3.svg",
      date: "June 5, 2024",
      title: "Title of the article",
    },
  ]);

  return (
    <div className="w-full max-w-[1160px] mx-auto">
      <div>
        <h2 className="text-[#1D263A] text-[60px] leading-[66px] tracking-[-1px] font-semibold text-center py-20">
          Latest Activity
        </h2>
      </div>
      <div className="w-[60%] mx-auto border border-[#116D48] rounded-[15px] flex justify-center items-center p-3">
        <div className="basis-[50%]">
          <p className="text-[#1D263A] text-[17px] leading-[30px] text-opacity-[50%] font-normal">
            Search Activity
          </p>
        </div>
        <div className="basis-[50%] text-right">
          <button className="bg-[#146A47] text-[#FFFFFF] text-[17px] leading-[30px] font-semibold rounded-[10px] px-6 py-4">
            Search
          </button>
        </div>
      </div>

      <div className="w-full mx-auto text-center p-10">
        <ul className="flex justify-center items-center space-x-10">
          <li className="text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer">
            ALL
          </li>
          <li className="text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer">
            CONFERENCE
          </li>
          <li className="text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer">
            WORKSHOP
          </li>
          <li className="text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer">
            PRODUCT LAUNCH
          </li>
          <li className="text-[22px] leading-[33px] tracking-[0.5px] font-bold text-[#404040] hover:text-[#1F7653] cursor-pointer">
            OUTINGS
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-x-6 gap-y-[42px]">
        {sliderImages.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-[20px] overflow-hidden shadow-xl"
            >
              <div
                className="relative before:w-full before:h-full
               before:absolute before:left-0 before:top-0
                before:bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_42.19%,_rgba(14,_20,_26,_0.56)_100%)] before:rounded-[20px]"
              >
                <img
                  className="rounded-[20px] w-full h-[300px]"
                  src={item.src}
                  alt=""
                />
              </div>
              <div className="pl-4 py-10">
                <p className="text-[#FF794D] text-[13px] leading-[22px] font-semibold pb-4">
                  {item.date}
                </p>
                <h4 className="text-[#1D263A] text-[24px] leading-[32px] font-semibold tracking-[-0.3px]">
                  {item.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityPage;
