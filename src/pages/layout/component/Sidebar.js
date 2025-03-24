import React from 'react';
import { Link } from 'react-router-dom';
import SideBarNavOption from '../../../components/sideBarNavOption/index'
import '../css/style.css';

const Sidebar = () => {

  const logo = process.env.PUBLIC_URL + '/material-uri-themeassets/assets/img/logo-ct-dark.png';

  const sideBarData = [
      {
        main: {
          title: 'Dashboard',
          icon: 'dashboard',
          path :'/'
        },
        dropdown:false
      },
      {
        main: {
          title: 'Posts',
          icon: 'table_view'
        },
        options: [
          {
            title: 'Create new',
            icon: 'create',
            path:'/posts/create-post'
          },
          {
            title: 'List',
            icon: 'table_view',
            path:'/posts'
          }
        ],
        dropdown:true
      }
    ];
  

    return (
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2  bg-white my-2" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <Link  className="navbar-brand px-4 py-3 m-0"  to="/">
            <img src={logo} className="navbar-brand-img" width="26" height="26" alt="main_logo" />
            <span className="ms-1 font-weight-bold">Dashboard</span>
          </Link>
        </div>
        <hr className="horizontal dark mt-0 mb-2" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
            {sideBarData && (
              sideBarData.map((data , index) => {
                return (<SideBarNavOption sideBarData={data} ></SideBarNavOption>);
              })
            )}
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <Link className='btn btn-outline-dark mt-4 w-100' to="/"> Documentation</Link>
            <Link className='btn bg-gradient-dark w-100' to="/"> Upgrade to pro</Link>
          </div>
        </div>
    </aside>
    );
}

export default Sidebar;
