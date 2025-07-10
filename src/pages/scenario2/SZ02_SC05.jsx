import React from "react";
import { useNavigate } from "react-router-dom";

const SZ02_SC05 = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/scenario2/ending2");
  };
  return (
    <div className='video-wrapper'>
      <video
        src='/videos/scenario2/SZ02_SC05.mp4'
        autoPlay
        controls
        onEnded={handleVideoEnd}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default SZ02_SC05;
