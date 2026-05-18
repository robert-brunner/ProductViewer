import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingBox from "./components/experiments/firstBox";
import SF900CPage from "./singleFile/sf900C.jsx";


export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<SF900CPage />} />
        <Route path="/box" element={<FloatingBox />} />

      </Routes>

    </BrowserRouter>

  );

}