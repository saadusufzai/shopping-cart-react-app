import React from 'react'
import {makeStyles}  from '@material-ui/core/styles'
import footerLogo from '../images/footerLogo.png'

const useStyles = makeStyles(({
    root:{
        
        position: 'bottom',
        bottom: '0',
        width: '100%',
        
        backgroundColor:'#282828',
        height:'200px',

    },
    footer:{
        display:'block',
        width:400,
        margin:'0 auto',
        padding:20,
        },
    footerText:{
        color:'#fff',
        textAlign:'center',
        letterSpacing:3.2,
    },
    link:{
        color:'grey',
        textDecoration:'none',

    },
    
}))


const Footer = () => {
    const classes = useStyles()

    return (
      
        <div className={classes.root}>
            <div>
                <img className={classes.footer} src={footerLogo} alt={footerLogo} />
            </div>
            <h3 className={classes.footerText}>Designed by <a className={classes.link} href='https://github.com/saadusufzai' target='blank'>M SAAD ASLAM</a></h3>
        </div>
    )
}

export default Footer
