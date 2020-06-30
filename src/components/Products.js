import React from "react";
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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    
    
  },
  card:{
      maxWidth: 345,
    },

}));

export default function Products() {
  const styles = useStyles();

  return (
    <div>
      <Grid container spacing={5}  className={styles.root}>
      <Grid  xs={12} sm={5} md={4} lg={12}  item>

        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Logitec Zone Wireless"
              height="200"
              image={img1}
              title="Logitec Zone Wireless"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Logitech Zone Wireless Bluetooth Headset
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Open workspaces are great for collaboration, but they can also
                be noisy. Take control of your acoustic environment with Zone
                Wireless, the Bluetooth® headset specifically designed for busy
                workspaces. Equally awesome for talking and music.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
            <Button size="small" color="primary">
              Add to Wish List
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid  xs={12} sm={5} md={4} lg={12}  item>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Logitec Zone Wireless"
              height="200"
              image={img1}
              title="Logitec Zone Wireless"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Logitech Zone Wireless Bluetooth Headset
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Open workspaces are great for collaboration, but they can also
                be noisy. Take control of your acoustic environment with Zone
                Wireless, the Bluetooth® headset specifically designed for busy
                workspaces. Equally awesome for talking and music.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
            <Button size="small" color="primary">
              Add to Wish List
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12} sm={5} md={4} lg={12}  item>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Logitec Zone Wireless"
              height="200"
              image={img1}
              title="Logitec Zone Wireless"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Logitech Zone Wireless Bluetooth Headset
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Open workspaces are great for collaboration, but they can also
                be noisy. Take control of your acoustic environment with Zone
                Wireless, the Bluetooth® headset specifically designed for busy
                workspaces. Equally awesome for talking and music.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
            <Button size="small" color="primary">
              Add to Wish List
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>

    </div>
  );
}
