import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Header from "../components/header/Header";
import LandigPage from "../pages/page-home/LandigPage";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import SignIn from "../components/Auth/Login";
import BookPage from "../pages/books/BookPage";
import SingleBookPage from "../pages/books/SingleBookPage";
import Footer from "../utils/footer";
import Dashboard from "../components/Dashboard/Dashboard";
import Dashboard_Page from "../pages/dashboard/Dashboard_Page";
import Category_Page from "../pages/categories/Category_Page";

const RouteAll = () => {
  const isDashboard =location.pathname.includes('/admin/dashboard');
  console.log(isDashboard);
  return (
    <BrowserRouter>
    {!isDashboard &&  <Header/> }
       
      <Routes>
        <Route path="/" element={<LandigPage />} />
        <Route path="/Auth/register" element={<Register />} />
        <Route path="/Auth/login" element={<SignIn />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/book/1" element={<SingleBookPage />} />
        <Route path="/admin/dashboard" element={<Dashboard_Page />} />
        <Route path="/categories" element={<Category_Page />} />
        <Route
          path="/*"
          element={
            <>
              <Outlet />
            </>
          }
        />
      </Routes>
      {!isDashboard &&  <Footer />}
    </BrowserRouter>
  );
};

export default RouteAll;
