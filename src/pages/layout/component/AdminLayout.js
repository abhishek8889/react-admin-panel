import React from "react";
// import Header from "./Header";

import Footer from "./Footer";
import Sidebar from "./Sidebar";
import NavbarComp from "./Navbar";
const AdminLayout = ({breadcrumbs,children}) => {
    return (
        <>
        <Sidebar />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <NavbarComp breadcrumbs={breadcrumbs}/>
            <div className="container-fluid py-2">
                {children}
                < Footer />
            </div>
        </main>
        </>
    );
}

export default AdminLayout;
