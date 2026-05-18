import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingBox from "./components/experiments/firstBox";
// import ProductPage from "./singleFile/sf900c/applied-wireless-clone/src/app/page.jsx";
import StrawberryPage from "./components/strawberry/berryBush";



export default function App() {

  return (

    <BrowserRouter>

      <Routes>

  
        <Route path="/box" element={<FloatingBox />} />
        <Route path="/" element={<StrawberryPage />} />

      </Routes>

    </BrowserRouter>

  );

}