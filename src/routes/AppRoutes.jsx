import {BrowserRouter, Routes,Route, useLocation,} from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Home from "../pages/home/Home";
import AboutPage from "../pages/about/AboutPage";
import ServicePage from "../pages/services/ServicePage";
import ServiceDetailsPage from "../pages/servicedetails/ServiceDetailsPage";
import BlogsPage from "../pages/blogs/BlogsPage";
import BlogDetailsPage from "../pages/blogdetails/BlogDetailsPage";
import ContactPage from "../pages/contact/ContactPage"
import NotFound from "../pages/notfound/NotFound";
import ScrollFunction from "../components/Common-Sections/ScrollFunction";

function Layout() {
  const location = useLocation();

  const validPaths = [
    "/",
    "/about-us",
    "/services",
    "/blogs",
    "/contact",
  ];

  const isBlogDetails = location.pathname.startsWith("/blogdetails/");
   const isServiceDetails = location.pathname.startsWith("/servicedetails/");

  const showLayout =
    validPaths.includes(location.pathname) || isBlogDetails || isServiceDetails;

  return (
    <>
      {showLayout && <Header />}

      <ScrollFunction />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about-us" element={<AboutPage />} />
         <Route path="/services" element={<ServicePage />} />
         <Route path="/servicedetails/:id" element={<ServiceDetailsPage />} />
         <Route path="/blogs" element={<BlogsPage />} />
         <Route path="/blogdetails/:id" element={<BlogDetailsPage />} />
         <Route path="/contact" element={<ContactPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

function AppRoutes() {
  return (
   
     <BrowserRouter>
      <Layout />
    </BrowserRouter>

  );
}

export default AppRoutes;