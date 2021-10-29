import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cartProducts } = props;
    let totalQuantity = 0;
    let totalPrice = 0;
    for (const product of cartProducts) {
        product.quantity = product.quantity ? product.quantity : 1;
        totalPrice += product.price * product.quantity;
        totalQuantity += product.quantity;
    }
    let tax = (totalPrice * 5) / 100;
    let shippingCost = 0;
    if (totalPrice > 0 && totalPrice < 250) {
        shippingCost = 30;
    }
    if (totalPrice >= 250) {
        shippingCost = 50;
    }
    if (totalPrice >= 500) {
        shippingCost = 110;
    }

    const grandTotal = totalPrice + tax + shippingCost;
    const coffeeBtn = <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
    return (
        <div className="cart">
            <h3>Items Ordered: ({totalQuantity})</h3>
            <h4>Price: {totalPrice.toFixed(2)}</h4>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Shipping: {shippingCost}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            <button className="orderReviewBtn">{coffeeBtn} Review Order</button>
        </div>
    );
};

export default Cart;