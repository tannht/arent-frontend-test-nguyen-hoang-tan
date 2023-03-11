import Header from "./Header";
import Footer from "./Footer";
import TopPage from "../top-page/TopPage";
import React from "react";

const Layout = ( children: any ) => {
    return (
        <div className="main-content">
            <Header/>

            <TopPage/>

            <Footer/>
        </div>
    );
};
export default Layout;
