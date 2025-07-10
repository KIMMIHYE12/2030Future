import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Menu from "./pages/Menu";
import SC01 from "./pages/scenario1/SC01";
import SC01_Choices from "./pages/scenario1/SC01_Choices";
import SC02 from "./pages/scenario1/SC02";
import SC02_Choices from "./pages/scenario1/SC02_Choices";
import SC03 from "./pages/scenario1/SC03";
import SC04 from "./pages/scenario1/SC04";
import SC05 from "./pages/scenario1/SC05";
import Ending1 from "./pages/scenario1/Ending1";
import Ending2 from "./pages/scenario1/Ending2";
import SZ02_SC01 from "./pages/scenario2/SZ02_SC01";
import SZ02_SC01_Choices from "./pages/scenario2/SZ02_SC01_Choices";
import SZ02_SC02 from "./pages/scenario2/SZ02_SC02";
import SZ02_SC02_Choices from "./pages/scenario2/SZ02_SC02_Choices";
import SZ02_SC03 from "./pages/scenario2/SZ02_SC03";
import SZ02_SC04 from "./pages/scenario2/SZ02_SC04";
import SZ02_SC05 from "./pages/scenario2/SZ02_SC05";
import SZ02_Ending1 from "./pages/scenario2/SZ02_Ending1";
import SZ02_Ending2 from "./pages/scenario2/SZ02_Ending2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
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
            <Route path='/scenario2/sc01' element={<SZ02_SC01 />} />
            <Route
              path='/scenario2/sc01/choices'
              element={<SZ02_SC01_Choices />}
            />
            <Route path='/scenario2/sc02' element={<SZ02_SC02 />} />
            <Route
              path='/scenario2/sc02/choices'
              element={<SZ02_SC02_Choices />}
            />
            <Route path='/scenario2/sc03' element={<SZ02_SC03 />} />
            <Route path='/scenario2/sc04' element={<SZ02_SC04 />} />
            <Route path='/scenario2/sc05' element={<SZ02_SC05 />} />
            <Route path='/scenario2/ending1' element={<SZ02_Ending1 />} />
            <Route path='/scenario2/ending2' element={<SZ02_Ending2 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
