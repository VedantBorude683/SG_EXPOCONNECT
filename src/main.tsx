import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import AboutUs from "./app/AboutUs.tsx";
import Team from "./app/Team.tsx";
import ScrollToTop from "./app/components/ScrollToTop.tsx";
import Navigation from "./app/components/Navigation.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navigation delay={1.4} />
    <div className="h-36" />
    {/* Gradient blur transition from navbar to page body */}
    <div className="fixed top-36 left-0 w-full h-1 bg-gradient-to-b from-white to-#FCFAF5/0 pointer-events-none z-40" />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  </BrowserRouter>
);