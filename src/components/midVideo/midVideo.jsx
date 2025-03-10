
import "./midVideo.css";
import React, { useRef, useState } from "react";

const MidVideo = () => {
     const videoRef = useRef(null);
      const [isPlaying, setIsPlaying] = useState(false);
      const toggleVideo = () => {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      };
  return (
    <div className="Text">
      <div className="why-media">
        <h3>With Media+?</h3>
        <h2>
          Create an OTT platform for your media <br /> into customer conversions
        </h2>
        <p>Let your videos do more than just sit on your website. Curate your video repository in a few <br/>easy steps and let it drive organic views and generate </p>
      </div>
      <div className="video-wrapper">
        {/* Video Player */}
        <video ref={videoRef} className="promo-video" controls loop poster="/images/Video.png">
          <source src="/images/midvideo.mp4" type="video/mp4" />
         
        </video>

        {/* Play/Pause Button */}
        <button onClick={toggleVideo} className="video-control">
          <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"} play-icon`}></i>
        </button>
      </div>
    </div>
  );
};

export default MidVideo;

