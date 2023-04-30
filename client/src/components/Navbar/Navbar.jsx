import React from "react";
import {  NavLink } from "react-router-dom";

import styled from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

const NavLinkMe = ({to, children, ...props})=>{
    return(
        <NavLink
        {...props}
            to = {to}
            className={({ isActive })=> (isActive? styled.active : styled.disabled)}
        >
        {children} 
        </NavLink>
    )
}

const Navbar = (props) => {
    const handlelogOut = () => {
        props.logOut();
       }
    return(
        <div className={styled.container}>
            <NavLinkMe to='/about'><span>About</span></NavLinkMe>
            <NavLinkMe to='/home'><span>Home</span></NavLinkMe>
            <NavLinkMe to='/favorites'><span>Favorites</span></NavLinkMe>
            <SearchBar
                onSearch = { props.onSearch }
            />
            <NavLinkMe onClick={handlelogOut}><span>LogOut</span></NavLinkMe>
        </div>
    )
}

export default Navbar;