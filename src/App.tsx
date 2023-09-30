import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/ui/AppLayout";
import Home from "@/pages/Home";
import Schedule from "@/pages/Schedule";
import MovieUpComing from "@/pages/MovieUpComing";
import MovieShowing from "@/pages/MovieShowing";
import Event from "@/pages/Event";
import Blog from "@/pages/Blog";
import Benefit from "@/pages/Benefit";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* Đặt trang mặc định là Home */}
            <Route index element={<Home />} />
            <Route path="lich-chieu-phim" element={<Schedule />} />
            <Route path="phim-dang-chieu" element={<MovieShowing />} />
            <Route path="phim-sap-chieu" element={<MovieUpComing />} />
            <Route path="uu-dai" element={<Event />} />
            <Route path="tin-tuc-phim" element={<Blog />} />
            <Route path="uu-dai-thanh-vien" element={<Benefit />} />
            <Route path="dang-nhap" element={<SignIn />} />
            <Route path="dang-ki" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
