import React from "react";
import NavBar from "./Components/MainComponents/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductDetails from "./Pages/ProductDetails";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import './index.css';
import Footer from "./Components/MainComponents/Footer";
import OtherPage from "./Pages/OtherPage";
import OrderSummary from "./Pages/OrderSummary";

function App() {
  return (
    <>
      <div className="custom-font " >
        <NavBar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/order/:orderId" element={<OrderSummary />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
