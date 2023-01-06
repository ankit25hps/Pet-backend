import React from "react";
import { Carousel } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavBar from "../../reusable-components/navbar/NavBar";
import SideBar from "../../reusable-components/sidebar/SideBar";

import './Home.css';

function Home() {
    return (
        <>
        <NavBar/>
        <SideBar/>
            <div className='home'>
                <Breadcrumb>
                    <br />
                    <Breadcrumb.Item active> Home</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <center>
                <div className='main'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className='d-block'
                                style={{
                                    width: 1300,
                                    height: 550,
                                    boxShadow: 100,
                                }}
                                src= {process.env.PUBLIC_URL + '/images/pets/pet1.jpg'}
                                alt='First slide'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block'
                                style={{
                                    width: 1300,
                                    height: 550,
                                    boxShadow: 100,
                                }}
                                src= {process.env.PUBLIC_URL + '/images/pets/pet2.jpg'}
                                alt='Second slide'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block'
                                style={{
                                    width: 1300,
                                    height: 550,
                                    boxShadow: 100,
                                }}
                                src= {process.env.PUBLIC_URL + '/images/pets/pet3.jpg'}
                                alt='Third slide'
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </center>
        </>
    );
}
export default Home;
