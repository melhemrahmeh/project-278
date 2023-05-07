import { Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppDetail from "./pages/AppDetail";
import Apps from "./pages/Apps";
import Books from "./pages/Books";
import Movies from "./pages/Movies";
import Account from "./pages/components/Navbar";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./pages/components/Footer";
import Navbar from "./pages/components/Navbar";
import { PrivateRoute } from "./config/PrivateRoute";
import Favorites from "./pages/Favorites";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/games"
          element={
            <PrivateRoute>
              <Games />
            </PrivateRoute>
          }
        />
        <Route
          path="/apps"
          element={
            <PrivateRoute>
              <Apps />
            </PrivateRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="/navbar" element={<Account />} />
        <Route path="/detail/:type/:id" element={<AppDetail />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
  );
}
