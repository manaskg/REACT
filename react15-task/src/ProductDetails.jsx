import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "./Context/ProductContext";
import { useEffect } from "react";

const ProductDetails = () => {
  const { productid } = useParams();
  // console.log(param.productid);

  const productData = useContext(ProductDataContext);

  let selectedProduct = ''
  
  if (productData.length > 0) {
    selectedProduct = productData.find((elem) => elem.id == productid);
  }

  console.log(selectedProduct);

  return (
    <div>
      <img src={selectedProduct.image} alt="" />
      <h2>{selectedProduct.title}</h2>
      <h3>${selectedProduct.price}</h3>
      <p>{selectedProduct.description}</p>
    </div>
  );
};

export default ProductDetails;
