import React, { useContext } from "react";
import classes from "./cart.module.css";
import { GlobalContext } from "../Context/GlobalContext";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const CartItems = ({ value, index }) => {
  const { plus, minus, remove } = useContext(GlobalContext);

  const { id } = value;
  const handleMinus = () => {
    value.quantity <= 1 ? remove(id) : minus(id);
  };
  const handlePlus = () => {
    plus(id);
  };
  const handleDel = () => {
    remove(id);
  };

  return (
    <div className={classes.product}>
      <ul className={classes.header2}>
        <li>{index + 1}</li>
        <li style={{ width: "100px" }}>{value.name}</li>

        <div className={classes.qtyTop}>
          <ExpandLessIcon onClick={handlePlus} className={classes.plus} />
          <li className={classes.qty}>{value.quantity}</li>
          <ExpandMoreIcon onClick={handleMinus} className={classes.minus} />
          <DeleteForeverIcon onClick={handleDel} className={classes.del} />
        </div>
        <li>{value.price}</li>
      </ul>
    </div>
  );
};
export default CartItems;
