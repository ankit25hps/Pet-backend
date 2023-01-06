import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './NavBar.css';

function NavBar() {
    return (
        <Router>
        <div className='nav-bar'>
            <ul className='nav justify-content-end'>
                <li className='nav-item position-absolute top-0 start-0 '>
                   <Link to='/Home'> <img
                        src={
                            process.env.PUBLIC_URL + "/images/logo/pawworld.png"
                        }
                        height={100}
                        width={120}
                        alt='Logo'
                    />
                    </Link>
                </li>
                <NavDropdown
                    title='Pets'
                    id='basic-nav-dropdown'
                    className='nav-item nav-color p-4'>
                    <NavDropdown.Item href='#'>
                        <p className='dropdown-list-item'>View Pet</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#'>
                       <p className='dropdown-list-item'>Register Pet</p>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    title='Appointments'
                    id='basic-nav-dropdown'
                    className='nav-item p-4'>
                    <NavDropdown.Item href='#'>
                        <p className='dropdown-list-item'>View Appointments</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#'>
                        <p className='dropdown-list-item'>Book Appointments</p>
                    </NavDropdown.Item>
                </NavDropdown>
                <li className='nav-item p-4'>
                 <Link to='/UserProfile'><img
                        src={
                            process.env.PUBLIC_URL + "/images/user-profile.png"
                        }
                        height={40}
                        width={50}
                        alt='User'
                    /></Link>   
                </li>
            </ul>
        </div>
        </Router>
    );
}

export default NavBar;
