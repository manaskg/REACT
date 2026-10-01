import React from "react";
import { useContext } from "react";
import { ProductDataContext } from "./Context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);
  return (
    <div className="allproducts">
      {productData.map(function (elem, idx) {
        return (
          <Link
            className="product"
            key={idx}
            
            to={`/products/${elem.id}`}
          >
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
