import React from 'react'
import { AppBar, Toolbar, Link, Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles/'

const useStyle = makeStyles((theme)=>({
    root:{
      backgroundColor:'#282828'
    }
}))


export default function Header() {
    const classes = useStyle()
    return (
        <AppBar className={classes.root}  position="absolute">
            <Toolbar>
               <Button color='secondary'>  <Link to='#' color='#fff' >HOME</Link> </Button>
               <Button color='secondary'>  <Link to='#' color='#fff'>Contact</Link> </Button>
               <Button color='secondary'>  <Link to='#' color='#fff'>Wish List</Link></Button>
               <Button color='secondary'>  <Link to='#' color='#fff'>Cart</Link></Button>
            </Toolbar>
        </AppBar>
    )
}
