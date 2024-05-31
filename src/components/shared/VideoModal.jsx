import React, { useState } from "react";
import BasicModal from "./BasicModal";
import YoutubePlayer from "./YoutubePlayer";

const VideoModal = ({ openVideoModal, handleOpen, videoId }) => {
  return (
    openVideoModal && (
      <BasicModal
        height={"220px"}
        width={"100%"}
        handleOpen={handleOpen}
        open={openVideoModal}
        header={<></>}
        body={<YoutubePlayer videoId={videoId} />}
      />
    )
  );
};

export default VideoModal;
