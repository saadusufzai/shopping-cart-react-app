import React from 'react'
import {makeStyles}  from '@material-ui/core/styles'

const useStyles = makeStyles(({
    root:{
        marginTop:'20',
        backgroundColor:'#282828',
        height:'200px',

    }
}))


const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div>
                <h1></h1>
            </div>
        </div>
    )
}

export default Footer
