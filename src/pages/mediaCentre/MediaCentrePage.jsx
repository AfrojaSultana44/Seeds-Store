import React, { useState } from "react";
import VideoModal from "../../components/shared/VideoModal";

import YouTube from "react-youtube";

const MediaCentrePage = () => {
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
    <div className="w-full max-w-[1160px] mx-auto">
      <div>
        <h2 className="text-[#1D263A] text-[60px] leading-[66px] tracking-[-1px] font-semibold text-center py-20">
          Media Centre
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {videoSlider.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-[20px] overflow-hidden shadow-xl"
          >
            <div className="rounded-[20px] w-full h-[220px] relative">
              <img
                src={item.srcImage}
                alt={item.title}
                className="w-full h-full object-fill"
              />
              <img
                onClick={() => handleOpen(item.src)}
                className="w-[80px] h-[80px] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 hover:scale-125 cursor-pointer transition-all duration-500 ease-in-out"
                src={item.srcImagePlay}
                alt={item.title}
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
        ))}
      </div>

      <VideoModal
        openVideoModal={openVideoModal}
        handleOpen={handleOpen}
        videoId={videoId}
      />


    </div>
  );
};

export default MediaCentrePage;
