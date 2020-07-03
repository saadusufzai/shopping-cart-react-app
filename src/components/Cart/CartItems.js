import React, {useContext} from "react";
import classes from "./cart.module.css";
import {GlobalContext} from '../Context/GlobalContext'

const CartItems = ({ value, index }) => {
  const {plus,minus} = useContext(GlobalContext)
  
  const {id} = value
  const handleMinus = ()=>{
    minus(id)
  }
  const handlePlus = ()=>{
      plus(id)
  }

  return (
    <div className={classes.product}>
      <h4>{index + 1}</h4>
      <h4 className={classes.name}>{value.name}</h4>
      <div >
       <span className={classes.qty}>{value.quantity}</span>
        <div>
          <span onClick={handleMinus} className={classes.minus}>-</span>
          <span onClick={handlePlus} className={classes.plus}>+</span>
        </div>
      </div>

      <h4>{value.price}</h4>
    </div>
  );
};
export default CartItems;
