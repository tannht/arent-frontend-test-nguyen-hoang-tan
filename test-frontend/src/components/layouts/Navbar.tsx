import React, { useState } from 'react';
import book from '../../assets/icons/book.svg';
import medal from '../../assets/icons/medal.svg';
import chat from '../../assets/icons/chat.svg';
import logo from '../../assets/images/logo.svg';
import navIcon from '../../assets/icons/icon-menu.svg';
import closeIcon from '../../assets/icons/icon-close.svg';
import PopMenu from "../PopMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState( false );
    const toggleMenu = () => {
        setShowMenu( prevState => !prevState );
        console.log( showMenu )
    };
    return (
        <>
            <nav className="navbar inner-content d-flex align-items-center">
                <div className="main-logo">
                    <Link to="/">
                        <img src={ logo } alt="logo"/>
                    </Link>
                </div>
                <ul className="menu-list d-flex align-items-center">
                    <li className="menu-item d-flex ">
                        <img src={ book } alt="icon"/>
                        <Link to="/">自分の記録</Link>
                    </li>
                    <li className="menu-item d-flex ">
                        <img src={ medal } alt="icon"/>
                        <Link to="/my-record">チャレンジ</Link>
                    </li>
                    <li className="menu-item d-flex ">
                        <div className="badge count">
                        <span>1</span>
                        <img src={ chat } alt="icon"/>
                        </div>
                        <Link to="/column">お知らせ</Link>
                    </li>
                    <div className="nav-icon d-flex align-items-center" onClick={ toggleMenu }>
                        { !showMenu && <img src={ navIcon } alt='menu-icon'/> }
                        { showMenu && <img src={ closeIcon } alt='menu-icon'/> }
                        { showMenu && <PopMenu/> }
                    </div>
                </ul>
            </nav>
        </>
    )
};
export default Navbar;
