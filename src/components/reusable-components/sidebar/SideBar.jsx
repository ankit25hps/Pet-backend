import React from "react";
import './SideBar.css';

function SideBar() {
    return (
        <div className='side-bar'>
            <ul className='nav flex-column vh-100'>
                <li className='nav-item'>
                    <a
                        className='nav-link side-bar-color active  p-3'
                        aria-current='page'
                        href='#'>
                        <p className='side-bar-color'>About Us</p>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link side-bar-color  p-3' href='#'>
                    <p className='side-bar-color'>Contact Us</p>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link side-bar-color  p-3' href='#'>
                      <p className='side-bar-color'>  Privacy Policy</p>
                    
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link   p-3' href='#'>
                        <p className='side-bar-color'>Logout</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
