import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddCartBtn = (product) => {
    console.log('cart btn clicked', product.name);
    const newCart = [...cart, product]
    setCart(newCart)
}
    return (
        <div className="shop__container">
           <div className="product__container">
                {
                    products.map(pd => <Product
                        handleAddCartBtn = {handleAddCartBtn}
                         product = {pd}
                         >{products.name}</Product>)
                }
           </div>
           <div className="cart__container">
               <div className="cart__container__label">
                   <Cart cart={cart}/>
               </div>
               
           </div>
        </div>
    );
};

export default Shop;