import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total+ prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }

    let shipping = 0;
    if(total>100){
        shipping = 0;
    }
    else if(total>30){
        shipping = 12.99;
    }
    else if(total>0){
        shipping = 4.99;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total + shipping+ Number(tax));

    const formattedAmount = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }



    return (
        <div className="cart__container">
            <div className="order__header">
                <h3>Order Summary</h3>
            </div>
            <div className="order_summary">
                <p><b>Items Ordered: </b>{cart.length}</p>
                <p><b>Shipping Cost: $</b>{shipping}</p>
                <p><b>Total tax: $</b>{tax}</p>
                <p><b>Product Price: </b>${formattedAmount(total)}</p>
                <p><b>Total Price: </b>${formattedAmount(grandTotal)}</p>
            </div>


        </div>
    );
};

export default Cart;