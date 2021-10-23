import React from 'react';
import './Cart.css';
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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


//     const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: "-3px",
//     top: "13px",
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));

// const CartBox = () =>{
//     return (
//      <div className="header__bottom">
//                 <input type="text" />
//                 <IconButton aria-label="cart">
//                     <StyledBadge badgeContent={cart.length} color="secondary">
//                     <ShoppingCartIcon />
//                     </StyledBadge>
//                 </IconButton>
//             </div>
// )}




    return (
        <div className="cart__container">
            <div className="order__header">
                <h3>Order Summary</h3>
            </div>
            <div className="order_summary">
                <div className="order__info">
                   <h4>Items Ordered: </h4>
                   <p>{cart.length}</p>
                </div>
                <div className="order__info">
                   <h4>Shipping Cost: </h4>
                   <p>$ {shipping}</p>
                </div>
                <div className="order__info">
                   <h4>Total tax: </h4>
                   <p>$ {tax}</p>
                </div>
                <div className="order__info">
                   <h4>Product Price: </h4>
                   <p>${formattedAmount(total)}</p>
                </div>
                <div className="order__info total__price">
                   <h4>Total Price: </h4>
                   <p>${formattedAmount(grandTotal)}</p>
                </div>
            </div>

        </div>
    );
};

export default Cart;