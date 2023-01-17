import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * .01).toFixed(2))
    const grandTotal = total + shipping + tax
    // console.log(typeof(shipping))
    return (
        <div className='cart-container'>
            <h1>Ordered Items</h1>
            <div className='cart-details-text'>
                <h2>Selected items: {props.cart.length}</h2>
                <p>Total Price: {total} Tk</p>
                <p>Shipping: {shipping} Tk</p>
                <p>Vat/Tax: {tax} Tk</p>
                <h3>Grand Total: {grandTotal} Tk</h3>
            </div>
        </div>
    );
};

export default Cart;