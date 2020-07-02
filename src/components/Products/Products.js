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

import img1 from "../../images/head-phone-1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { dummyData } from "./dummydata";


const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    maxWidth: 345,
  },
  img:{
      width:'250px',
      margin:'0 auto'
  },
  btn:{
    backgroundColor:'black',
    color:'#fff',
    width:'100%',
    padding:'10px'

  },
  action:{
    backgroundColor:'grey',
    width:'100%',
    
  }
  
}));

console.log(dummyData.map((e) => e.id));

export default function Products() {
  const styles = useStyles();

  return (
    <div>
      <Grid container spacing={5} className={styles.root}>
      {dummyData.map((e)=> 
        <Grid xs={12} sm={5} md={3} item>
          <Card className={styles.card}>
            <CardActionArea>
              <CardMedia
                className={styles.img}
                component="img"
                alt="Logitec Zone Wireless"
                height="200"
                image={e.imgUrl}
                title="Logitec Zone Wireless"
              />
              <CardContent>
                <Typography noWrap gutterBottom variant="h5" component="h2">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Open workspaces are great for collaboration, but they can also
                  be noisy. Take control of your acoustic environment with Zone
                  Wireless, the Bluetooth® headset specifically designed for
                  busy workspaces. Equally awesome for talking and music.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions >
              <div className={styles.action}>
                <Button className={styles.btn} size="small" color="primary">
                Add to Cart
              </Button>
              </div>

            </CardActions>
          </Card>
        </Grid>
        )}
      </Grid>
    </div>
  );
}
