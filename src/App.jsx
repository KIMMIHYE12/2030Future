import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Menu from "./pages/Menu";
import Video1 from "./pages/Video1";
import SC01 from "./pages/scenario1/SC01";
import SC01_Choices from "./pages/scenario1/SC01_Choices";
import SC02 from "./pages/scenario1/SC02";
import SC02_Choices from "./pages/scenario1/SC02_Choices";
import SC03 from "./pages/scenario1/SC03";
import SC04 from "./pages/scenario1/SC04";
import SC05 from "./pages/scenario1/SC05";
import Ending1 from "./pages/scenario1/ending1";
import Ending2 from "./pages/scenario1/Ending2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='phone-frame'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/scenario1/sc01' element={<SC01 />} />
          <Route path='/scenario1/sc01/choices' element={<SC01_Choices />} />
          <Route path='/scenario1/sc02' element={<SC02 />} />
          <Route path='/scenario1/sc02/choices' element={<SC02_Choices />} />
          <Route path='/scenario1/sc03' element={<SC03 />} />
          <Route path='/scenario1/sc04' element={<SC04 />} />
          <Route path='/scenario1/sc05' element={<SC05 />} />
          <Route path='/scenario1/ending1' element={<Ending1 />} />
          <Route path='/scenario1/ending2' element={<Ending2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
