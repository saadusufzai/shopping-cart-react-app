import React, { useContext, useState } from "react";
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

import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../Context/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  card: {
    maxWidth: 445,
    margin: "0 auto",
  },

  img: {
    width: "250px",
    margin: "0 auto",
  },
  btn: {
    backgroundColor: "black",
    color: "#fff",
    width: "100%",
    padding: "10px",
  },
  action: {
    backgroundColor: "grey",
    width: "100%",
  },
  mainBox: {
    marginBottom: 30,
  },
}));

export default function Products({ product, id, name, price, imgUrl }) {
  const styles = useStyles();

  const { addItem, cart, plus } = useContext(GlobalContext);
  const [btnText, setBtnText] = useState("ADD TO CART");

  const addToCart = () => {
    if (cart.find((e) => e.id === product.id)) {
      plus(id);
    } else {
      product.quantity = 1;
      addItem({ product });
      setBtnText("ADD MORE");
    }
  };

  const hoverIn = () => {};

  const hoverOut = () => {};

  return (
    <>
      <Grid className={styles.mainBox} xs={12} sm={6} md={3} item>
        <Card
          onMouseEnter={hoverIn()}
          onMouseLeave={hoverOut()}
          className={styles.card}
        >
          <CardActionArea className={styles.actionArea}>
            <CardMedia
              className={styles.img}
              component="img"
              alt="Shoe Store"
              height="200"
              image={imgUrl}
              title="Shoe Store"
            />
            <CardContent>
              <Typography
                style={{ marginTop: "10px" }}
                align="center"
                noWrap
                variant="h5"
                component="h2"
              >
                {name}
              </Typography>
              <Typography
                align="justify"
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
            <CardContent className={styles.root}>
              <Typography variant={"h6"} align="center">
                PRICE
              </Typography>
              <Typography align="center">{price}&euro;</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={styles.action}>
              <Button
                onClick={addToCart}
                className={styles.btn}
                size="small"
                color="primary"
              >
                {btnText}
              </Button>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
