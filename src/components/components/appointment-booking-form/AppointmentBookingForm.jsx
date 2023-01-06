import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.css';
// import './Login.css';
import { AuthContext } from '../../context/AuthContext';
import * as Constants from '../../constants/constants';
import './AppointmentBookingForm.css';

const myRadioButton = ({ field }) => {
    return (
        <label className='text-gray-500 font-bold label'>
            <input {...field} className='mr-2 leading-tight' type='radio' />
            <span className='text-sm'>Yes</span>
        </label>
    );
};

const MyRadioButtonHook = () => {
    const [field] = useField({
        name: 'previousMedicationStatus',
        type: 'radio',
        value: 'no',
    });
    return (
        <label className='text-gray-500 font-bold'>
            <input {...field} className='mr-2 leading-tight' type='radio' />
            <span className='text-sm'>No</span>
        </label>
    );
};

const LoginSchema = Yup.object().shape({
    userName: Yup.string().required('Name is required'),
    userEmail: Yup.string()
        .email('Invalid email address format')
        .required('Email is required'),
    userPhoneNumber: Yup.string()
        .required('required')
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            'Phone number is not valid',
        ),
    petName: Yup.string().required('Pet name is required'),
    dateOfAppointment: Yup.string().required('Date is required'),
    timeOfAppointment: Yup.string().required('Time Of Appointment is required'),
    reasonOfAppointment: Yup.string()
        .required('Reason of appointment is required')
        .max(100, 'Word limit exceeded'),
    allergies: Yup.string().max(100, 'Word limit exceeded'),
    previousMedicationStatus: Yup.string().required(
        'Previous Medication Status is required',
    ),
    procedureRequested: Yup.string().required('Procedure is required'),
});

function AppointmentBookingForm() {
    const { user, setUser } = useContext(AuthContext);
    // const [show, setShow] = useState(false);

    // const handleClose = () => {
    //     setShow(false);
    // };

    // const showSuccessMessage = () => {
    //     <Toast show={show} onClose={handleClose}>
    //         <Toast.Header>
    //             <strong className='me-auto'>Success</strong>
    //         </Toast.Header>
    //         <Toast.Body>
    //             Your appointment has been successfully booked.
    //         </Toast.Body>
    //     </Toast>;
    // };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <Formik
                        initialValues={{
                            userName: '',
                            userEmail: '',
                            userPhoneNumber: '',
                            petName: '',
                            dateOfAppointment: '',
                            timeOfAppointment: '',
                            reasonOfAppointment: '',
                            allergies: '',
                            previousMedicationStatus: '',
                            procedureRequested: '',
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            console.log(values);
                            resetForm();
                            // setShow(true);
                            // showSuccessMessage();
                            try {
                                fetch(
                                    `${Constants.LOGINBASEURL}/validatePetOwner`,
                                    {
                                        method: 'POST',
                                        mode: 'cors',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Access-Control-Allow-Origin': '*',
                                        },
                                        body: JSON.stringify(values),
                                    },
                                )
                                    .then((response) => {
                                        console.log(response);
                                        if (response.ok) {
                                            return response.json();
                                        }
                                        return alert(
                                            'Invalid credentials. Please login again',
                                        );
                                    })
                                    .then((data) => {
                                        setUser(data);
                                        console.log(user);
                                        setSubmitting(false);
                                    });
                            } catch (error) {}
                        }}>
                        {({ touched, errors, isSubmitting }) => (
                            <div>
                                <div className='row mb-5'>
                                    <div className='col-lg-12 text-center'>
                                        <h1 className='mt-5'>BOOKING FORM</h1>
                                    </div>
                                </div>
                                <div className='form'>
                                    <Form>
                                        <div className='form-group form-label'>
                                            <label htmlFor='userName'>
                                                Pet Owner Name
                                            </label>
                                            <Field
                                                type='name'
                                                name='userName'
                                                placeholder='Enter name'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.userName && errors.userName
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='userName'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='userEmail'
                                                className='mt-3'>
                                                Pet Owner Email
                                            </label>
                                            <Field
                                                type='text'
                                                name='userEmail'
                                                placeholder='Enter email'
                                                className={`mt-2 form-control
                          ${
                              touched.userEmail && errors.userEmail
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />
                                            <ErrorMessage
                                                component='div'
                                                name='userEmail'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label htmlFor='userPhoneNumber'>
                                                Phone Number
                                            </label>
                                            <Field
                                                type='text'
                                                name='userPhoneNumber'
                                                placeholder='Enter phone number'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.userPhoneNumber && errors.userPhoneNumber
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='userPhoneNumber'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label htmlFor='petName'>
                                                Pet Name
                                            </label>
                                            <Field
                                                type='text'
                                                name='petName'
                                                placeholder='Enter pet name'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.petName && errors.petName
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='petName'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label htmlFor='dateOfAppointment'>
                                                Date Of Appointment
                                            </label>
                                            <Field
                                                type='date'
                                                name='dateOfAppointment'
                                                placeholder='Enter date'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.dateOfAppointment &&
                              errors.dateOfAppointment
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='dateOfAppointment'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label htmlFor='timeOfAppointment'>
                                                Time Of Appointment (select one)
                                            </label>

                                            <Field
                                                as='select'
                                                name='timeOfAppointment'
                                                className={`mt-2 form-control
                          ${
                              touched.timeOfAppointment &&
                              errors.timeOfAppointment
                                  ? 'is-invalid'
                                  : ''
                          }`}>
                                                <option defaultValue>
                                                    Select
                                                </option>
                                                <option value='9-10 AM'>
                                                    9-10 AM
                                                </option>
                                                <option value='10-11 AM'>
                                                    10-11 AM
                                                </option>
                                                <option value='11-12 PM'>
                                                    11-12 PM
                                                </option>
                                                <option value='2-3 PM'>
                                                    2-3 PM
                                                </option>
                                                <option value='3-4 PM'>
                                                    3-4 PM
                                                </option>
                                                <option value='4-5 PM'>
                                                    4-5 PM
                                                </option>
                                                <option value='5-6 PM'>
                                                    5-6 PM
                                                </option>
                                            </Field>
                                        </div>

                                        <div className='form-group form-label'>
                                            <label htmlFor='reasonOfAppointment'>
                                                Reason of Appointment
                                            </label>
                                            <Field
                                                type='text'
                                                name='reasonOfAppointment'
                                                placeholder='symptoms, diseases..'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.reasonOfAppointment &&
                              errors.reasonOfAppointment
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='reasonOfAppointment'
                                                className='invalid-feedback'
                                            />
                                            <small>Max word limit is 100</small>
                                        </div>

                                        <div className='form-group form-label'>
                                            <label htmlFor='allergies'>
                                                Allergies (if any)
                                            </label>
                                            <Field
                                                type='text'
                                                name='allergies'
                                                placeholder='Enter allergies'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.allergies && errors.allergies
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='allergies'
                                                className='invalid-feedback'
                                            />
                                            <small>Max word limit is 100</small>
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='previousMedicationStatus'
                                                className='label'>
                                                Previous Medication Status
                                            </label>
                                            <Field
                                                name='previousMedicationStatus'
                                                type='radio'
                                                value='yes'
                                                component={myRadioButton}
                                            />
                                            <MyRadioButtonHook />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label htmlFor='procedureRequested'>
                                                Procedure Requested
                                            </label>

                                            <Field
                                                type='text'
                                                name='procedureRequested'
                                                placeholder='Vaccination, regular checkup etc..'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.procedureRequested &&
                              errors.procedureRequested
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='procedureRequested'
                                                className='invalid-feedback'
                                            />
                                            <small>Max word limit is 100</small>
                                        </div>

                                        <div className='text-center'>
                                            <Button
                                                type='submit'
                                                className='btn btn-dark btn-block mt-4 button'
                                                disabled={isSubmitting}>
                                                {!isSubmitting
                                                    ? 'Submit'
                                                    : 'Submitting'}
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default AppointmentBookingForm;
