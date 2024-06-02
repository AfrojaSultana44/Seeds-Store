import React, { useState } from "react";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ActivitySection = () => {
  const [sliderImages, setSliderImages] = useState([
    {
      src: "/images/pic1.svg",
      topic: "Topic",
      title: "Title of the article",
    },
    {
      src: "/images/pic2.svg",
      topic: "Topic",
      title: "Title of the article",
    },
    {
      src: "/images/pic3.svg",
      topic: "Topic",
      title: "Title of the article",
    },
    {
      src: "/images/pic1.svg",
      topic: "Topic",
      title: "Title of the article",
    },
    {
      src: "/images/pic2.svg",
      topic: "Topic",
      title: "Title of the article",
    },
    {
      src: "/images/pic3.svg",
      topic: "Topic",
      title: "Title of the article",
    },
  ]);

  return (
    <div className="w-full max-w-[1160px] mx-auto mt-[142px]">
      <div className="flex justify-between items-center mb-[63px]">
        <div className="basis-[40%]">
          <h4 className="text-[#1D263A] text-6xl font-semibold">
            Latest Activity
          </h4>
        </div>
        <div className="basis-[60%] pl-[10px]">
          <p className="text-[#1D263A] text-base font-normal text-opacity-[70%]">
            We've gathered inspiring farmer testimonials, announced our
            participation in upcoming agricultural fairs and workshops, and held
            team-building events for our employees. Stay tuned to see how we
            continue shaping the future of farming with excellence.
          </p>
        </div>{" "}
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        className="h-full"
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },

        //   420: {
        //     slidesPerView: 2,
        //     spaceBetween: 10,
        //   },

        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },

        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 10,
        //   },
        //   1280: {
        //     slidesPerView: 5,
        //     spaceBetween: 10,
        //   },
        // }}
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative">
              <div>
                <img
                  src={item.src}
                  className="w-full h-auto border rounded-xl"
                />
              </div>
              <div className="border border-red-500 absolute left-[30px] bottom-[27px]">
                <h6 className="text-black text-[11px] leading-[20px] font-semibold">
                  {item.topic}
                </h6>
                <p className="text-black text-[15px] leading-[26px] font-bold">
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-[62px] text-center">
        <button className="text-[#116D48] text-lg font-semibold border border-[#146A47] rounded-xl py-[20px] px-[80px]">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default ActivitySection;
