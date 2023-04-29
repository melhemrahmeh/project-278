import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maher from "./pages/Maher";
import Login from "./pages/login";
import Register from "./pages/Register";
import AppDetail from "./pages/AppDetail";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/maher" element={<Maher />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail" element={<AppDetail/>}/>
    </Routes>
  );
}
