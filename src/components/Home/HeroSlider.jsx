import React, { useState } from "react";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSlider = () => {
  return (
    <div className="bg-[#D6EBE4]">
      <div className="w-full max-w-[1160px] mx-auto">
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
          //   breakpoints={{
          //     0: {
          //       slidesPerView: 1,
          //       spaceBetween: 10,
          //     },

          //     540: {
          //       slidesPerView: 2,
          //       spaceBetween: 10,
          //     },

          //     768: {
          //       slidesPerView: 3,
          //       spaceBetween: 10,
          //     },

          //     1024: {
          //       slidesPerView: 4,
          //       spaceBetween: 10,
          //     },
          //     1280: {
          //       slidesPerView: 5,
          //       spaceBetween: 10,
          //     },
          //   }}
        >
          <SwiperSlide className="w-full h-full">
            <div className="w-full flex justify-between items-center">
              <div className="basis-[45%]">
                <h1 className="text-[#1D263A] text-[64px] leading-[72px] font-bold">
                  <span className="text-[#116D48]">Seeds</span> of Innovation
                  and Growth
                </h1>
                <p className="text-[#1D263A] text-xl font-normal mb-[59px] mt-[15px] opacity-[70%]">
                  Unleash Potential with Our Exclusive Hybrid Selection
                </p>
                <div>
                  <button className="text-[#FFFFFF] text-[18px] leading-[18px] font-semibold bg-[#116D48] border rounded-xl px-12 py-4">
                    Explore Products
                  </button>
                </div>
              </div>
              <div className="basis-[55%] shrink-0 pl-[10px] pt-10">
                <div className="relative text-right">
                  <img
                    className="w-[527.4px] h-[517.39px] ml-auto"
                    src="/images/Intersect.svg"
                    alt=""
                  />
                  <img
                    className="absolute top-5 right-[10%] w-[428px] h-[518.28px]"
                    src="/images/OBJECTS.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full h-full">
            <div className="w-full flex justify-between pt-20">
              <div className="basis-[55%] shrink-0">
                <img
                  className="pl-[60px]"
                  src="/images/Group1144.svg"
                  alt=""
                />
              </div>
              <div className="basis-[45%] text-right">
                <h1 className="text-[#1D263A] text-[64px] leading-[72px] font-bold">
                  <span className="text-[#116D48]">
                    Your Trusted Partner in
                  </span>{" "}
                  Agriculture
                </h1>
                <p className="text-[#1D263A] text-xl font-normal mb-[59px] mt-[15px] opacity-[70%]">
                  Expert support and guidance for informed decisions and
                  maximized crop yields.
                </p>
                <div>
                  <button className="text-[#FFFFFF] text-[18px] leading-[18px] font-semibold bg-[#116D48] border rounded-xl px-12 py-4">
                    Discover Our Partnership Programs
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full h-full mt-10">
            <div className="w-full flex justify-between py-20">
              <div className="basis-[45%]">
                <h1 className="text-[#1D263A] text-[40px] leading-[52px] font-bold">
                  <span className="text-[#116D48]">Unwavering</span> Quality,{" "}
                  <span className="text-[#116D48]">Unmatched</span> Yields
                </h1>
                <p className="text-[#1D263A] text-xl font-normal mb-[59px] mt-[15px] opacity-[70%]">
                  State-of-the-art processing ensures exceptional seed purity
                  and germination rates.
                </p>
                <div>
                  <button className="text-[#FFFFFF] text-[18px] leading-[18px] font-semibold bg-[#116D48] border rounded-xl px-12 py-4">
                    Learn About Our Quality Control
                  </button>
                </div>
              </div>
              <div className="basis-[55%] shrink-0">
                <div className="pl-20">
                  <img
                    className="w-[549.15px] h-[407.27px]"
                    src="/images/Group1146.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
