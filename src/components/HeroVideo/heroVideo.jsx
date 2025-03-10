import React, { useRef, useState } from "react";
import "./heroVideo.css"; // Ensure this file exists

const HeroVideo = () => {
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
    <div className="hero-section">
      <div className="video-wrapper">
        {/* Video Player */}
        <video ref={videoRef} className="promo-video" controls loop poster="/images/video.jpeg">
          <source src="/images/whatsappVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button */}
        <button onClick={toggleVideo} className="video-control">
          <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"} play-icon`}></i>
        </button>
      </div>

      {/* Partners Section */}
      <div className="partners">
        <div className="perfected">Perfected by</div>
        <div className="partner-logos">
          <img src="/images/image 1138.png" alt="Partner Logo 1" />
          <img src="/images/Agora logo.png" alt="Partner Logo 2" />
          <img src="/images/image 1139.png" alt="Partner Logo 3" />
          <img src="/images/Frame 1000006879.png" alt="Partner Logo 4" />
          <img src="/images/image 1142.png" alt="Partner Logo 5" />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;