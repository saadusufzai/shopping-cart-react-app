import React from "react";
import ProductList from "./Products/ProductList";
import { makeStyles } from "@material-ui/core/styles";
import logo from '../images/logo.png'
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
logo:{
  width:320,
  display:'block',
  margin:'auto'
},
welcome:{
marginBottom:'2%'
}
}));

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.home}>
      <img className={styles.logo} src={logo} alt='logo'/>
        <ProductList/>
    </div>
  );
}
