import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import TopPage from "../../pages/top-page/TopPage";
import MyRecord from "../../pages/my-record/MyRecord";
import Column from "../../pages/column/Column";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
    const currentUrl = window.location.href;
    console.log( 'currentUrl', currentUrl )
    return (
        <div className="main-content">
            <Header/>
            <Routes>
                <Route path="/" element={ <TopPage/> }/>
                <Route path="/my-record" element={ <MyRecord/> }/>
                <Route path="/column" element={ <Column/> }/>
            </Routes>
            <Footer/>
        </div>
    );
};
export default Layout;
