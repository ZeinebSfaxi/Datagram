import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import './Navbar.css';

const Header = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>

            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <i className="fas fa-bars" onClick={showSidebar}></i>
                </Link>
                <Link to='/' >
                    <h2 className='title'>My App</h2>
                </Link>
            </div>

            < nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='nav-menu-items'>
                        <Link to='#' className='menu-bars'>
                            <i className="fas fa-times"></i>
                        </Link>
                    </li>

                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>)
                    })}
                </ul>
            </nav>

        </>
    );
};

export default Header;