import Sidebar from "./Sidebar";
import NavbarComp from "./Navbar";
const Header = ({content}) => {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />
                <div className="layout-page">
                    <NavbarComp />
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    );
}

export default Header;
