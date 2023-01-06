import React, { useState, useEffect, useContext } from 'react';

import Pet from '../pet/Pet';
import * as Constants from '../../../constants/constants';
// import { AuthContext } from '../context/AuthContext';
import '../appointment/Appointment.css';

function PetList() {
    const [petData, setPetData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const { user } = useContext(AuthContext);

    // const id = user.userId;
    // console.log(user.userId);

    useEffect(() => {
        try {
            fetch(
                `${Constants.PETBASEURL}/getPetInfoDetailsByUserId?userId=1`,
                { mode: 'cors' },
            )
                .then((response) => {
                    // console.log(response);
                    return response.json();
                })
                .then((data) => {
                    // console.log(data);
                    const transformedData = data.map((pet) => {
                        return {
                            petName: pet.petName,
                            petAge: pet.petAge,
                            petWeight: pet.petWeight,
                            petBreed: pet.petBreed,
                            petGender: pet.petGender,
                        };
                    });
                    setPetData(transformedData);
                });
        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <>
            {isLoading && <div className='data-show'>Loading...</div> }

            {!isLoading && !petData.length && <div classNAme='data-show'>No data to show</div> }
            <table className='appointments-list'>
                <tbody>
                    <tr>
                        <th className='table-heading'>Pet Name</th>
                        <th className='table-heading'>Pet Age</th>
                        <th className='table-heading'>Pet Weight</th>
                        <th className='table-heading'>Pet Breed</th>
                        <th className='table-heading'>Pet Gender</th>
                        <th className='table-heading' id='actions'>
                            Actions
                        </th>
                    </tr>
                </tbody>

                {!isLoading &&
                    petData &&
                    petData.map(
                        (
                            { petName, petAge, petWeight, petBreed, petGender },
                            index,
                        ) => (
                            <Pet
                                key={index}
                                petName={petName}
                                petAge={petAge}
                                petWeight={petWeight}
                                petBreed={petBreed}
                                petGender={petGender}
                            />
                        ),
                    )}
            </table>
        </>
    );
}

export default PetList;
