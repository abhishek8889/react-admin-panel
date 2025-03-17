import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import NavbarComp from "./Navbar";
const AdminLayout = ({children}) => {
    return (
        <>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />
                <div className="layout-page">
                    <NavbarComp/>
                    <div classNameName="content-wrapper">
                        {children}
                        <Footer/>
                        <div classNameName="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
        </>
    );
}

export default AdminLayout;
