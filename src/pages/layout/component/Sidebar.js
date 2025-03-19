import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2  bg-white my-2" id="sidenav-main">
      <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a className="navbar-brand px-4 py-3 m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
          <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img" width="26" height="26" alt="main_logo" />
          {/* <span className="ms-1 text-sm text-dark"></span> */}
        </a>
      </div>
      <hr className="horizontal dark mt-0 mb-2" />
      <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active bg-gradient-dark text-white" to="/">
              <i className="material-symbols-rounded opacity-5">dashboard</i>
              <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active bg-gradient-dark text-white" to="/posts">
              <i className="material-symbols-rounded opacity-5">table_view</i>
              <span className="nav-link-text ms-1">Posts</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer position-absolute w-100 bottom-0 ">
        <div className="mx-3">
          <a className="btn btn-outline-dark mt-4 w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard?ref=sidebarfree" type="button">Documentation</a>
          <a className="btn bg-gradient-dark w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a>
        </div>
      </div>
    </aside>
    );
}

export default Sidebar;
