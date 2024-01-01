import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import TopSellers from "./components/TopSellers";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<HeroSection />}>
          <Route path={"/:id"} element={<ProductDetail />} />
        </Route>
      </Routes>
      <TopSellers />
      <Footer />
    </div>
  );
}
