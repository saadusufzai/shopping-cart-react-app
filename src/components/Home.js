import React from "react";
import ProductList from "./Products/ProductList";
import { makeStyles } from "@material-ui/core/styles";

import {
  
  Typography,
  
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
home: {
    marginTop:'7%'
},
welcome:{
marginBottom:'2%'
}
}));

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.home}>
        <Typography className={styles.welcome} align='center'  variant={"h4"}>WELCOME TO MiTECH STORE</Typography>
        <ProductList/>
    </div>
  );
}
