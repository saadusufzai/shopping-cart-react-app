import React from 'react'
import { Grid,Paper } from '@material-ui/core'
import classes from './cart.module.css'

export default function cart() {
    return (
        <div className={classes.body}>
            <Grid container spacing={2}>
                <Grid  xs={9}  item >
                    <Paper square  className={classes.box1}>
                       <div className={classes.strip}>
                        <div className={classes.header}>
                            <h4>#</h4>
                            <h4>Product</h4>
                            <h4>Quantity</h4>
                            <h4>Price</h4>
                        </div>
                        </div>
                        <div className={classes.product}>
                            <h4>1</h4>
                            <h4>HeadPhones</h4>
                             <span className={classes.minus}>-</span>
                             <div className={classes.qty}>1</div>
                             <span className={classes.plus}>+</span>
                            <h4>192000</h4>
                        </div>
                    </Paper>
                </Grid>
                <Grid xs={3}  item >
                    <Paper square  className={classes.box1}>
                        <div className={classes.strip}>
                            <div className={classes.header}>
                                <h4>TOTAL</h4>
                            </div>
                        </div>    
                            <div className={classes.price}>
                                <div className={classes.endPrice}>
                                    <div>Price</div>
                                    <div>96000</div>
                                </div>
                                
                                <div className={classes.discount}>
                                    <div>Discount</div>
                                    <div> -3000</div>
                                </div>
                                
                                <hr/>
                                <div className={classes.endTotal}>
                                    <div>Grand Total</div>
                                    <div>192000</div>
                                </div>

                            </div>
                        
                    </Paper>
                </Grid>
                
            </Grid>
        </div>
    )
}
