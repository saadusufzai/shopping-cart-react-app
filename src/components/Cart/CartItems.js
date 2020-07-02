import React from "react";
import classes from "./cart.module.css";

const CartItems = ({ value,index }) => {
 
    
  return (
    <div className={classes.product}>
      <h4>{index+1}</h4>
      <h4 className={classes.name} >{value.name}</h4>
      <span className={classes.minus}>-</span>
      <div className={classes.qty}>1</div>
      <span className={classes.plus}>+</span>
      <h4>{value.price}</h4>
    </div>
  );
};
export default CartItems;
