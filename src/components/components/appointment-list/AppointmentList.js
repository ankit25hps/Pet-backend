import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../../reusable-components/navbar/NavBar';
import SideBar from '../../reusable-components/sidebar/SideBar';

import Appointment from '../appointment/Appointment';
import * as Constants from '../../../constants/constants';
//import { AuthContext } from '../../context/AuthContext';
import './AppointmentList.css';

function AppointmentList() {
    const [appointmentData, setAppointmentData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   // const { user } = useContext(AuthContext);

    // const id = user.userId;
    // console.log(user.userId);

    useEffect(() => {
        try {
            fetch(
                `${Constants.PETBASEURL}/getAppointmentDetailsByUserId?userId=3`,
                { mode: 'cors' },
            )
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    const transformedData = data.map((appointment) => {
                        return {
                            petName: appointment.petName,
                            dateOfAppointment: appointment.dateOfAppointment,
                            timeOfAppointment: appointment.timeOfAppointment,
                        };
                    });
                    setAppointmentData(transformedData);
                });
        } catch (error) {
            setIsLoading(false);
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <>
        <NavBar/>
        <SideBar/>
        <h2 className='text-center element-center'>Appointment Details</h2>
            {isLoading && <div className='data-show'>Loading...</div>}
            {!isLoading && !appointmentData.length && <div className='data-show'>No data to show</div>}
            <table className='appointments-list'>
                <tbody>
                    {!isLoading && appointmentData.length > 0 && (
                        <tr>
                            <th className='table-heading'>Pet Name</th>
                            <th className='table-heading'>
                                Date Of Appointment
                            </th>
                            <th className='table-heading'>
                                Time Of Appointment
                            </th>
                        </tr>
                    )}
                </tbody>

                {!isLoading &&
                    appointmentData &&
                    appointmentData.map(
                        (
                            { petName, dateOfAppointment, timeOfAppointment },
                            index,
                        ) => (
                            <Appointment
                                key={index}
                                petName={petName}
                                dateOfAppointment={dateOfAppointment}
                                timeOfAppointment={timeOfAppointment}
                            />
                        ),
                    )}
            </table>
        </>
    );
}

export default AppointmentList;