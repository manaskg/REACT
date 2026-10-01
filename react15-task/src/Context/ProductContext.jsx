import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const responce = await axios.get("https://fakestoreapi.com/products");
    setProductData(responce.data);
  };



  useEffect(() => {
    getData();
  }, []);



  return (
    <ProductDataContext.Provider value={productData}>
      <div>{props.children}</div>
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
