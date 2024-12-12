import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  const opts = {
    height: "300px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
    </div>
  );
};

export default YoutubePlayer;
