import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from 'react-router-dom';

const Shop = () => {
//   console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  const [products, setproducts] = useState(first10);
  const [cart, setCart] = useState([]);
  useEffect( ()=> {
    const savedData = getDatabaseCart();
    const productKeys = Object.keys(savedData);
    const previousCart = productKeys.map( pdKey =>{
      const product = fakeData.find( pd => pd.key === pdKey );
      product.quantity = savedData[pdKey];
      return product;
      // console.log(product);
      
    })
    // console.log(savedData, productKeys);
    setCart(previousCart);
  }, [])

  const handleAddProduct = (product) =>{
    const sameProduct = cart.find(pd => pd.key === product.key);
    let count = 1;
    let newCart;
    if(sameProduct){
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;

      const others = cart.filter(pd => pd.key !== product.key);
      newCart = [...others, sameProduct]
    }
    else{
      product.quantity = 1;
      newCart = [...cart, product]
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product 
          key = {product.key}
          showAddToCart = {true}
          handleAddProduct = {handleAddProduct}
          product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
            <Link to="/review"><button className="cart-button">Review</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
