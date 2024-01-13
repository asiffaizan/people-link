import React from 'react';
import './Summary.css';

const Summary = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.balance.replace(/[$,]/g, '')), 0);


    return (
        <div className='right-card'>
            <h1>Total Friends</h1>
            <p>Send Request: {cart.length }</p>
            <h3>Grand Total : {totalAmount}$</h3>
        </div>
    );
};

export default Summary;