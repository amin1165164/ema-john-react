import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, price, key} = props.product;
    const reviewItemStyle = {
        // borderBottom: '2px solid gray',
        marginLeft: '100px',
        marginBottom: '10px',
        marginRight: '100px',
        padding: '10px',
        boxShadow: '5px 20px 20px gray',
        borderRadius: '8px'
    }
    return (
        <div style={reviewItemStyle}>
            <h3>{name}</h3>
            <p>Quantity:{quantity}</p>
            <p>Price:{price}</p> 
            <button 
            onClick={() => props.handleProduct(key)}
            className="cart-button">Remove</button>
        </div>
    );
};

export default ReviewItem;
