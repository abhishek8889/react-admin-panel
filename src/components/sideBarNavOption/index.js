import React from "react";
import { Link } from 'react-router-dom';

import { useState } from 'react';


const SideBarNavOption = ({ sideBarData }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            {sideBarData && sideBarData.dropdown == false && (
                <li className="nav-item">
                    <Link className="nav-link active bg-dark text-white" to={sideBarData.main.path}>
                        <i className="material-symbols-rounded opacity-5">{sideBarData.main.icon}</i>
                        <span className="nav-link-text ms-1">{sideBarData.main.title}</span>
                    </Link>
                </li>
            )}

            {sideBarData && sideBarData.dropdown == true && sideBarData.options.length > 0 && (
                <li className="nav-item">
                    <div className="nav-link bg-gradient-dark text-white bg-dark text-white d-flex justify-content-between align-items-center" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                        <i className="material-symbols-rounded opacity-5">{sideBarData.main.icon}</i>
                        <span className="nav-link-text ms-1">{sideBarData.main.title}</span>
                        <i className={`material-symbols-rounded ms-auto ${isDropdownOpen ? 'rotate-180' : ''}`}>expand_more</i>
                    </div>
                    {isDropdownOpen && (
                    <ul className="navbar-nav dropdown-list"  style={{ paddingLeft: '20px', marginTop: '5px' }}>
                        {sideBarData.options.map((data,index) => {
                            return(
                            <li className="nav-item">
                                <Link className="nav-link bg-light text-dark" to={data.path}>
                                    <i className="material-symbols-rounded opacity-5">{data.icon}</i>
                                    <span className="nav-link-text ms-1">{data.title}</span>
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                    )}
                </li>
            ) }
        </>
    );
}

export default SideBarNavOption;