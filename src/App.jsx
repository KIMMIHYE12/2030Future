import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Menu from "./pages/Menu";
import Video1 from "./pages/Video1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="phone-frame">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/video1" element={<Video1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
