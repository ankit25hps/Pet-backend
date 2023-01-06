import React from 'react';
import Button from 'react-bootstrap/Button';
import '../appointment/Appointment.css';

const Pet = ({ petName, petAge, petWeight, petBreed, petGender }) => {
    return (
        <>
            <tbody>
                <tr className='appointment'>
                    <td>{petName}</td>
                    <td>{petAge}</td>
                    <td>{petWeight}</td>
                    <td>{petBreed}</td>
                    <td>{petGender}</td>
                    <td>
                        <Button
                            type='button'
                            className='btn btn-style btn-block mt-4 button'>
                            Update
                        </Button>

                        <Button
                            type='button'
                            className='btn btn-style btn-block mt-4 button'>
                            Delete
                        </Button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default Pet;
