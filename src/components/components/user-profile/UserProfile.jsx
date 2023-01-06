import React from 'react';
import Navbar from '../../reusable-components/navbar/NavBar';
import Sidebar from '../../reusable-components/sidebar/SideBar';


import './UserProfile.css';

function UserProfile() {
  return (
    <>
    <Navbar />
    <Sidebar />
      <div className='container p-5'>
            <div className='user-pic'>
                <img src= {process.env.PUBLIC_URL + '/images/user-profile.png'} height={100} width={120} alt='userpic' />
            </div>
            <div className='name'>Rajinder Kaur</div>
            <div className='email'>
                Rajinderkaur@gmail.com
            </div>
        </div>
        </>
  )
}

export default UserProfile;
