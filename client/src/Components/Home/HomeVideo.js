import React from "react";
import HomeVideo from "../../Resources/HomeVideo.mp4";

const Video = () => {
    return (
      <div>
        <video src={HomeVideo} width="600" height="300" controls="controls" autoplay="true" />
      </div>
    );
}

export default Video;