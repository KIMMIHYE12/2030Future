import React from "react";
import { useNavigate } from "react-router-dom";

const SC03 = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/scenario1/ending1");
  };
  return (
    <div className='video-wrapper'>
      <video
        src='/videos/scenario1/SZ01_SC03.mp4'
        autoPlay
        controls
        onEnded={handleVideoEnd}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default SC03;
