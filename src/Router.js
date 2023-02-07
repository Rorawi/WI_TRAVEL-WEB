import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import Catalogue from "./components/Catalogue";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
