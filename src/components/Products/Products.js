import React, { useContext } from "react";
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
import { dummyData } from "./dummydata";
import { GlobalContext } from "../Context/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  card: {
    maxWidth: 345,
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
}));

export default function Products({ product, name, price, imgUrl }) {
  const styles = useStyles();

  const { addItem } = useContext(GlobalContext);

  const addToCart = () => {
    addItem({product});
  };



  return (
    <>
      <Grid xs={12} sm={5} md={3} item>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.img}
              component="img"
              alt="Logitec Zone Wireless"
              height="200"
              image={imgUrl}
              title="Logitec Zone Wireless"
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography
                align="justify"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Open workspaces are great for collaboration, but they can also
                be noisy. Take control of your Keyboard environment
              </Typography>
            </CardContent>
            <CardContent className={styles.root}>
              <Typography variant={"h6"} align="center">
                PRICE
              </Typography>
              <Typography align="center">Rs.{price} </Typography>
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
                Add to Cart
              </Button>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
