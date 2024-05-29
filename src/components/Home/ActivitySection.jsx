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
      src: "/images/Group180.png",
    },
    {
      src: "/images/Group181.png",
    },
    {
      src: "/images/Group182.png",
    },
  ]);

  return (
    <div className="w-full max-w-[1160px] mx-auto mt-[142px]">
      <div className="flex justify-between items-center border border-red-700 mb-[63px]">
        <div className="basis-[40%]">
          <h4 className="text-[#1D263A] text-6xl font-semibold">
            Latest Activity
          </h4>
        </div>
        <div className="basis-[60%] pl-[10px]">
          <p className="text-[#1D263A] text-base font-normal opacity-[70%]">
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
        slidesPerView={5}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        className="h-full"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          420: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img src={item.src} className="w-full h-full border" />
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
