import React from 'react';
import Button from 'react-bootstrap/Button';
import '../appointment/Appointment.css';

const Appointment = ({ petName, dateOfAppointment, timeOfAppointment }) => {
    return (
        <>
            <tbody>
                <tr className='appointment'>
                    <td>{petName}</td>
                    <td>{dateOfAppointment}</td>
                    <td>{timeOfAppointment}</td>
                    <td>
                        <Button
                            type='button'
                            className='btn btn-color btn-block mt-4 button'>
                            Cancel
                        </Button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default Appointment;
