import React from 'react';
import classes from '../style/Header.module.css';
import logo from '../resources/assets/logo.png';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className={classes.main}>
            <Link to={"/"}><div className={classes.logo}><img src={logo}/></div></Link>
            <div className={classes.text}>Mushroom library</div>
            <Link to={"/predict"}><div className={classes.text}>Predict</div></Link>
        </div>
    );
}

export default Header;