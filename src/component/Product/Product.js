import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
//   console.log(props);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p>by:{seller}</p>
        <p>${price}</p>
        <p>Only {stock} left in the stock - order soon</p>
        <button 
            className="cart-button" 
            onClick={() =>props.handleAddProduct(props.product)}
        >
            <FontAwesomeIcon icon={faShoppingCart} /> add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
