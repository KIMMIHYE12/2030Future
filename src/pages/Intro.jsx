import React from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/menu");
  };
  return (
    <div className="video-wrapper">
      <video
        src="/videos/intro_SC01.mp4"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        playsInline
      />
    </div>
  );
}
