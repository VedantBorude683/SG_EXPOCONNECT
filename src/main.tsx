import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import AboutUs from "./app/AboutUs.tsx";
import ScrollToTop from "./app/components/ScrollToTop.tsx";
import Navigation from "./app/components/Navigation.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navigation delay={1.4} />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);