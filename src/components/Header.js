import React from 'react'
import { AppBar,Badge, Toolbar, IconButton, Link, Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles/'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
const useStyle = makeStyles((theme)=>({
    root:{
      backgroundColor:'#282828'
    },
    grow:{
        width:'100%',
        textAlign:'right',
    }
}))


export default function Header() {
    const classes = useStyle()
    return (
        <AppBar className={classes.root}  position="absolute">
            <Toolbar>
               <Button color='secondary'>  <Link to='#' color='#fff' >HOME</Link> </Button>
               <Button color='secondary'>  <Link to='#' color='#fff'>Contact</Link> </Button>
               <Button color='secondary'>  <Link noWrap to='#' color='#fff'>Wish List</Link></Button>
               <Button color='secondary'>  <Link to='#' color='#fff'>Cart</Link></Button>
            
              <div className={classes.grow}>
              < IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                    <LocalMallIcon />
                </Badge>
                </IconButton>
              </div>
            </Toolbar>

        </AppBar>
    )
}
