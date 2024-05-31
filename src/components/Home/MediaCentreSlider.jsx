import React, { useState } from "react";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import YouTube from "react-youtube";
import VideoModal from "../shared/VideoModal";

const MediaCentreSlider = () => {
  const [videoId, setVideoId] = useState("");

  const [videoSlider, setVideoSlider] = useState([
    {
      src: "5Ejp7yFZxPM",
      srcImage: "/images/Rectangle1.svg",
      srcImagePlay: "/images/play.svg",
      title: "FIFTY FIFTY - Cupid",
      duration: "2.54",
    },
    {
      src: "R4AbzwYOmNE",
      srcImage: "/images/Rectangle2.svg",
      srcImagePlay: "/images/play.svg",
      title: "Imagine Dragons - Believer - Pinkpop 2017",
      duration: "3:46",
    },
    {
      src: "JrNMyzsYr4M",
      srcImage: "/images/Rectangle3.svg",
      srcImagePlay: "/images/play.svg",
      title: "Ellie Goulding - Love Me Like You Do",
      duration: "5:14",
    },
    {
      src: "5Ejp7yFZxPM",
      srcImage: "/images/Rectangle1.svg",
      srcImagePlay: "/images/play.svg",
      title: "FIFTY FIFTY - Cupid",
      duration: "2.54",
    },
    {
      src: "R4AbzwYOmNE",
      srcImage: "/images/Rectangle2.svg",
      srcImagePlay: "/images/play.svg",
      title: "Imagine Dragons - Believer - Pinkpop 2017",
      duration: "3:46",
    },
    {
      src: "JrNMyzsYr4M",
      srcImage: "/images/Rectangle3.svg",
      srcImagePlay: "/images/play.svg",
      title: "Ellie Goulding - Love Me Like You Do",
      duration: "5:14",
    },
  ]);

  const [openVideoModal, setOpenVideoModal] = useState(false);

  const handleOpen = (id = "") => {
    setOpenVideoModal((prev) => {
      return !prev;
    });
    setVideoId(id);
  };

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
            <p className="text-[16px] leading-[22px] font-normal pt-[23px] pb-14">
              Discover the latest in agricultural innovation with Rasel Seeds.
              Explore press releases, industry articles, and multimedia content
              on advanced seed technologies and sustainable farming. Stay
              updated with farmer testimonials, agricultural fairs, product
              launches, and our dynamic employee culture. See how Rasel Seeds is
              shaping the future of farming with excellence.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
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
          {videoSlider.map((item, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="bg-[#FFFFFF] rounded-[20px] overflow-hidden">
                <div className="rounded-[20px] w-full h-[220px] relative">
                  <img src={item.srcImage} alt="" className="w-full h-full object-fill" />
                  <img
                    onClick={() => handleOpen(item.src)}
                    className="w-[80px] h-[80px] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 hover:scale-125 cursor-pointer transition-all duration-500 ease-in-out"
                    src={item.srcImagePlay}
                    alt=""
                  />
                </div>
                <div className="min-h-[140px] pl-[24px] pt-4 pb-[21px]">
                  <h4 className="text-[#000000] text-[18px] leading-[24px] font-semibold pb-[9px] pt-[16px]">
                    {item.title}
                  </h4>
                  <h5 className="text-[#000000] text-[12px] leading-[24px] font-normal opacity-[64%]">
                    {item.duration}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-[62px] pb-[117px] text-center">
          <button className="text-[#116D48] font-semibold text-lg border border-[#146A47] rounded-xl py-[20px] px-[80px]">
            VIEW ALL
          </button>
        </div>
        <VideoModal
          openVideoModal={openVideoModal}
          handleOpen={handleOpen}
          videoId={videoId}
        />
      </div>
    </div>
  );
};

export default MediaCentreSlider;
