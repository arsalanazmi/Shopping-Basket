import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  About,
  MenShoes,
  WomenShoes,
  KidsShoes,
  ManShoe,
  WomanShoe,
  KidShoe,
  NotFound,
  Footer,
} from "./Components";

const ConfigRoute = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products/men_shoes" element={<MenShoes />} />
        <Route path="products/women_shoes" element={<WomenShoes />} />
        <Route path="products/kids_shoes" element={<KidsShoes />} />
        <Route path="products/men_shoes/:productId" element={<ManShoe />} />
        <Route path="products/women_shoes/:productId" element={<WomanShoe />} />
        <Route path="products/kids_shoes/:productId" element={<KidShoe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default ConfigRoute;
