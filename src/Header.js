import { Avatar } from '@material-ui/core';
import React from 'react';
import Logo from "./logo.png";
import "./Header.css";
function Header() {
    return (
        <div className="header">
            <div className="header__content">
            <div className="heaeder__logo">
            <img className="header__logo__image" src={Logo}/>
            </div>
            <div className="header__nav">
            <ul className="header__menu">
                <li><a href="" className="header__links">Home</a></li>
                <li><a href="" className="header__links">Categories</a></li>
                <li><a href="" className="header__links">Posts by Reaction</a></li>
                <li><a href="" className="header__links">Archive</a></li>
                <li><a href="" className="header__links">Sample Page</a></li>
                <li><a href="" className="header__links">Contact Form</a></li>
            </ul>
            </div>
            <div className="header__signin">
            <Avatar src="http://demo.themeton.com/pressgrid/wp-content/themes/press-grid/images/user.png" />
            <span className="header__signin1"> sign in</span>
            <span> sign up</span>
            </div>
            </div>
        </div>
    )
}

export default Header
