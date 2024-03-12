import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
