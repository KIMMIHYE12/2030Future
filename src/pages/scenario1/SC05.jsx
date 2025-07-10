import React from "react";
import { useNavigate } from "react-router-dom";

const SC05 = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/scenario1/ending2");
  };
  return (
    <div className='video-wrapper'>
      <video
        src='/videos/scenario1/SZ01_SC05.mp4'
        autoPlay
        controls
        onEnded={handleVideoEnd}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default SC05;
