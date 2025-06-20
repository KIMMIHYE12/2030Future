import React from "react";

export default function Video1() {
  return (
    <div className="video-wrapper">
      <video
        src="/videos/SZ01_SC01.mp4"
        autoPlay
        controls
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}
