import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnJoFvP3oUoKQmpD410dqkSGRWUVQwyc5a_y5FClxOFULBwm3O&usqp=CAU' />

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;