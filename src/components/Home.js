import React from "react";
import Products from "./Products/Products";
import { makeStyles } from "@material-ui/core/styles";

import {
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Typography,
  Card,
  Grid,
} from "@material-ui/core";

import img1 from "../images/head-phone-1.jpg";
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
        <Products/>
    </div>
  );
}
