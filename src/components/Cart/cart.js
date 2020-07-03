import React,{useContext} from 'react'
import { Grid,Paper } from '@material-ui/core'
import CartItem from './CartItems'
import classes from './cart.module.css'
import { GlobalContext } from '../Context/GlobalContext'



const Carts = () => {
    
  const {cart} = useContext(GlobalContext) 
 
  const totalPrice =  (cart.reduce((acc, value)=>acc+value.price,0))
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

                       {cart.map((value,i)=>(
                           <CartItem key={value.id} index={i} value={value}/>
                       ))}
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
                                    <div>Total Price</div>
                                    <div>{totalPrice}</div>
                                </div>
                                
                                <div className={classes.discount}>
                                    <div>Discount</div>
                                    <div> 0</div>
                                </div>
                                <div className={classes.discount}>
                                    <div>Sales TAX</div>
                                    <div> 0</div>
                                </div>
                                
                                <hr/>
                                <div className={classes.endTotal}>
                                    <div>Grand Total</div>
                                    <div>{totalPrice}</div>
                                </div>

                            </div>
                        
                    </Paper>
                </Grid>
                
            </Grid>
        </div>
    )
}
export default Carts
