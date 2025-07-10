import React from "react";
import { useNavigate } from "react-router-dom";

const SZ03_SC02 = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/scenario3/ending1");
  };
  return (
    <div className='video-wrapper'>
      <video
        src='/videos/scenario3/SZ03_SC02.mp4'
        autoPlay
        controls
        onEnded={handleVideoEnd}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default SZ03_SC02;
