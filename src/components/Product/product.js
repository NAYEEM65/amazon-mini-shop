import React from 'react';
import './product.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


    const UseStyles = makeStyles(theme => ({
      btnBg: {
        backgroundColor: "#e2b44d",
        color: "#000",
      },
      buttonColor:{
          backgroundColor: "#fa7238",
      }

    }));



const product = (props) => {
    const {img, name, seller, price, stock,} = props.product;
    const classes = UseStyles();
    return (
        <div className="product">
            <div className="product__image">
                <img src={img} alt="" />
                
            </div>
            <div className="product__name">
                <h4>{name}</h4>
                <br />
                <p><small><b>by: </b>{seller}</small></p>
                <p><b>Price: </b>${price}</p>
                <br />
                <p><small className="stock__details">Only {stock} left in stock - order soon</small></p>
                <div>
                    <Button onClick={() =>props.handleAddCartBtn(props.product)} className={classes.buttonColor}><ShoppingCartIcon /> <span>Add to cart</span></Button>
                </div>
            </div>
        </div>
    );
};

export default product;