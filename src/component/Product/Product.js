import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
//   console.log(props);
  const { name, img, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name"><Link to={"/"+key}>{name}</Link> </h3>
        <p>by:{seller}</p>
        <p>${price}</p>
        <p>Only {stock} left in the stock - order soon</p>
        {props.showAddToCart && <button 
            className="cart-button" 
            onClick={() =>props.handleAddProduct(props.product)}
        >
            <FontAwesomeIcon icon={faShoppingCart} /> add to Cart
        </button>}
      </div>
    </div>
  );
};

export default Product;
