import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./ProductPage";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { CartProvider } from "./Create.context";
import CheckOutPage from "./CheckOutPage";
import Profile from "../Profile/Profile";

function Home() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default Home;
