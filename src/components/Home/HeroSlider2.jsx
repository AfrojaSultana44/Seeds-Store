import React, { useState } from "react";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSlider2 = () => {
  const [totalSlide, setTotalSlide] = useState([
    {
      id: 1,
      name: "slide 1",
    },
    {
      id: 2,
      name: "slide 2",
    },
    {
      id: 3,
      name: "slide 3",
    },
    {
      id: 4,
      name: "slide 4",
    },
    {
      id: 5,
      name: "slide 5",
    },
    {
      id: 6,
      name: "slide 6",
    },
  ]);

  return (
    <div className="w-full max-w-[1160px] mx-auto h-[450px] border border-red-500 p-10">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
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

          540: {
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
        {totalSlide.map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-full h-full border border-green-500">
                <h2 className="text-center">{item.name}</h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider2;



