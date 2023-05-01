import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maher from "./pages/Maher";
import Login from "./pages/login";
import Register from "./pages/Register";
import AppDetail from "./pages/AppDetail";
import Apps from "./pages/Apps";
import Books from "./pages/Books";
import Movies from "./pages/Movies";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/maher" element={<Maher />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/books" element={<Books />} />
      <Route path="/detail" element={<AppDetail />} />
    </Routes>
  );
}
