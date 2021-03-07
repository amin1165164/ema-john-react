import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import funnyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlace, setOrderPlace] = useState(false);

    const handlePlaceOrder = () => {
        // console.log('order placed')
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }

    const handleProduct = (productKeys) => {
        // console.log('clicked me', productKeys);
        const newCart = cart.filter(pd => pd.key !== productKeys);
        setCart(newCart);
        removeFromDatabaseCart(productKeys);
    }
    useEffect(() =>{
        const savedData = getDatabaseCart();
        // console.log(savedData);
        const productKeys = Object.keys(savedData);
        // console.log(productKeys);
        const selectValues = Object.values(savedData);
        // console.log(selectValues);
        const productsCart = productKeys.map(key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedData[key];
            return(product);
        })
        setCart(productsCart);
        // console.log(productsCart);
    }, []);
    
    let thankYou;
    if(orderPlace){
        thankYou = <img src={funnyImage} alt = ''/>
    }
    return (
        <div className="shop-container">
            {/* <h1>Cart Items: {cart.length}</h1> */}
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        handleProduct = {handleProduct}
                        key = {pd.key}
                        product={pd}></ReviewItem>)
                }
                {thankYou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className ="cart-button">Place Order</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;