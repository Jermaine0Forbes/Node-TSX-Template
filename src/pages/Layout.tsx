import React from 'react';
import { Outlet, Link} from "react-router-dom";
import { Container, AppBar,MenuList, MenuItem, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    toolbar: {
        display: "flex",
        color: "white",
        "& a": {
            color: "white",
            textDecoration: "none"
        }
    },

}));


export default function Layout():JSX.Element
{
    const classes = useStyles();

    return (
        <Container>
            <AppBar position="static" color="secondary">
                <Toolbar disableGutters >
                    <MenuList className={classes.toolbar}>
                        <MenuItem><Link to="/">Home</Link></MenuItem>
                        <MenuItem><Link to="/create">Create</Link></MenuItem>
                        <MenuItem><Link to="/test">Test</Link></MenuItem>
                        <MenuItem><Link to="/study">Study</Link></MenuItem>
                    </MenuList>
                </Toolbar>
            </AppBar>
            <Outlet />
        </Container>
    );
}