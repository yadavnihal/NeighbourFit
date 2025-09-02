import { Routes, Route } from "react-router-dom";
import './styles/global.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import UserPage from "./pages/UserPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import MapPage from "./pages/MapPage";
import AreaDetailPage from "./pages/AreaDetailPage";
import AreasPage from "./pages/AreasPage";
import CompareAreas from "./pages/CompareAreas";



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/areas/:areaName" element={<AreaDetailPage />} />
        <Route path="/compare" element={<CompareAreas />} />
        
        

      </Routes>
    </div>
  );
}

export default App;
