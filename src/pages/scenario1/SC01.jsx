import React from "react";
import { useNavigate } from "react-router-dom";

const SC01 = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/scenario1/SC01/choices");
  };
  return (
    <div className='video-wrapper'>
      <video
        src='/videos/scenario1/SZ01_SC01.mp4'
        autoPlay
        controls
        onEnded={handleVideoEnd}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default SC01;
