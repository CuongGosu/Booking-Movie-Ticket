import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '@/ui/AppLayout';
import Home from '@/pages/Home';
import Schedule from '@/pages/Schedule';
import MovieUpComing from '@/pages/MovieUpComing';
import MovieShowing from '@/pages/MovieShowing';
import Event from '@/pages/Event';
import Blog from '@/pages/Blog';
import Benefit from '@/pages/Benefit';
import './App.css';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';
import Booking from './pages/Booking';
import InfoUser from './pages/InfoUser';
import AppAdmin from './ui/AppAdmin';
import ProtectedAdmin from './ui/ProtecedAdmin';
import ProtectedRouteUser from './ui/ProtectedRouteUser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import ManageBil from './pages/ManageBil';
import ManageRoom from './pages/ManageRoom';
import ManageMovie from './pages/ManageMovie';
import ManageSchedule from './pages/ManageSchedule';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="lich-chieu-phim" element={<Schedule />} />
            <Route path="phim-dang-chieu" element={<MovieShowing />} />
            <Route path="phim-sap-chieu" element={<MovieUpComing />} />
            <Route path="uu-dai" element={<Event />} />
            <Route path="tin-tuc-phim" element={<Blog />} />
            <Route path="uu-dai-thanh-vien" element={<Benefit />} />
            <Route path="dang-nhap" element={<SignIn />} />
            <Route path="dang-ki" element={<SignUp />} />
            <Route path="thong-tin-tai-khoan" element={<User />} />
          </Route>
          <Route
            element={
              <ProtectedRouteUser>
                <AppLayout />
              </ProtectedRouteUser>
            }
          >
            <Route path="booking" element={<Booking />} />
            <Route path="thong-tin-nguoi-dung" element={<InfoUser />} />
          </Route>
          <Route
            element={
              <ProtectedAdmin>
                <AppAdmin />
              </ProtectedAdmin>
            }
          >
            <Route path="quan-li-phim" index element={<ManageMovie />} />
            <Route path="quan-li-hoa-don" element={<ManageBil />} />
            <Route path="quan-li-phong-rap" element={<ManageRoom />} />
            <Route path="quan-li-lich-chieu" element={<ManageSchedule />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
