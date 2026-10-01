import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productid" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;


