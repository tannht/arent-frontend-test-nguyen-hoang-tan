import React from 'react';
import book from '../../assets/icons/book.svg';
import medal from '../../assets/icons/medal.svg';
import chat from '../../assets/icons/chat.svg';
import logo from '../../assets/images/logo.svg';
import navIcon from '../../assets/icons/icon-menu.svg';

const Navbar = () => {
    return (
        <nav className="navbar d-flex align-items-center">
            <div className="main-logo">
                <a href="/">
                    <img src={ logo } alt="logo"/>
                </a>
            </div>
                <ul className="menu-list d-flex align-items-center">
                    <li className="menu-item d-flex ">
                        <img src={ book } alt="icon"/>
                        <a href="/">自分の記録</a>
                    </li>
                    <li className="menu-item d-flex ">
                        <img src={ medal } alt="icon"/>
                        <a href="/">チャレンジ</a>
                    </li>
                    <li className="menu-item d-flex ">
                        <img src={ chat } alt="icon"/>
                        <a href="/">お知らせ</a>
                    </li>
                    <div className="nav-icon d-flex align-items-center">
                        <img src={navIcon} alt='menu-icon'/>
                    </div>
                </ul>
        </nav>
    )
};
export default Navbar;
