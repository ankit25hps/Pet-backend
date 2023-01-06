import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import UserProfile from "./components/components/user-profile/UserProfile";
import AppointmentList from "./components/components/appointment-list/AppointmentList";
import Login from "./components/components/login/Login";
import Pet from "./components/components/pet/Pet";
import PetList from "./components/components/pet-list/PetList";
import NavBar from "./components/reusable-components/navbar/NavBar";
import SideBar from "./components/reusable-components/sidebar/SideBar";
import Home from "./components/components/home/Home";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/components/sign-up/SignUp";

const App = () => {
    return (
        <>
         <SideBar />

        </>
            
           
    );
};

export default App;
