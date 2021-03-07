import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, product) => total + product.price , 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        debugger;
    }

    let shippingCost = 0;
    if(total >= 35){
        shippingCost = 0;
    }
    else if(total >= 15){
        shippingCost = 4.50;
    }
    else if(total > 0){
        shippingCost = 11.25;
    }

    let tax = (total/10).toFixed(2);

    const grandTotal = (total+shippingCost+Number(tax)).toFixed(2);



    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {total.toFixed(2)}</p>
            <p><small>Shipping Cost: {shippingCost} </small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total price : {grandTotal}</p>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;