import { Routes, Route } from "react-router-dom";
import Adam from "./pages/Adam";
import Home from "./pages/Home";
import Maher from "./pages/Maher";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/adam" element={<Adam />} />
      <Route path="/maher" element={<Maher />} />
    </Routes>
  );
}
