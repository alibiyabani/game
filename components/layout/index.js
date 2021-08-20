import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

export default function Layout(props) {
    const classes = useStyles();
    // let currentDate ='';
    // let fullDate = new Date();
    // currentDate = fullDate.getFullYear();

    return (
        <>
            <AppBar position='sticky'>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Games Hub
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className='container'>
                {props.children}
            </div>
            <div className='footer'>
                <span>Copyright by Ma Developer</span>
            </div>
        </>
    );
}