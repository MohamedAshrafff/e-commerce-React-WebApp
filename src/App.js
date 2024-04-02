import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductDetails from "./Pages/ProductDetails";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import './index.css';
import FavouritesPage from "./Pages/FavouritesPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="custom-font">
        <NavBar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
