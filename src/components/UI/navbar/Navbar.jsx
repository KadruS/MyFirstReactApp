import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import cl from './Navbar.module.css'
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={cl['navbar']}>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div id='navbar__links' className={cl["navbar__links"]}>
                <NavLink to="/about" className={cl['active']}>О сайте</NavLink>
                <NavLink to="/posts" className={cl['active']}>Посты</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
