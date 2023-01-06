import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
// import customAlert from './resuableComponents/Alert';
// import './Login.css';
import { AuthContext } from '../../context/AuthContext';
import './RegisterPet.css';
import * as Constants from '../../constants/constants';

const LoginSchema = Yup.object().shape({
    petName: Yup.string().required('Pet name is required'),
    petAge: Yup.number().required('Pet age is required'),
    petGender: Yup.string().required('Pet gender is required'),
    petBreed: Yup.string().required('Pet breed is required'),
    petHairCoatType: Yup.string().required('Pet Hair Coat is Required'),
    petColor: Yup.string().required('Pet color is required'),
    petWeight: Yup.number().required('Pet Weight is required'),
});

const initialValues = {
    petName: '',
    petAge: '',
    petGender: '',
    petBreed: '',
    petHairCoatType: '',
    petColor: '',
    petWeight: '',
};

const savedValues = {
    petName: 'Bruno',
    petAge: 11,
    petGender: 'Male',
    petBreed: 'Labrador',
    petHairCoatType: 'Long',
    petColor: 'Golden',
    petWeight: 40.6,
};

function RegisterPet({ isEdit }) {
    const { user, setUser } = useContext(AuthContext);
    const [reset, setReset] = useState(false);
    const data = {};

    return (
        <div className='container pet-form'>
            <div className='row'>
                <div className='col-lg-12'>
                    <Formik
                        initialValues={!isEdit ? initialValues : savedValues}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            {
                                isEdit
                                    ? (data = { ...values })
                                    : (data = { values });
                            }
                            console.log(data);
                            resetForm();
                            // try {
                            //     fetch(
                            //         `${Constants.LOGINBASEURL}/validatePetOwner`,
                            //         {
                            //             method: 'POST',
                            //             mode: 'cors',
                            //             headers: {
                            //                 'Content-Type': 'application/json',
                            //                 'Access-Control-Allow-Origin': '*',
                            //             },
                            //             body: JSON.stringify(values),
                            //         },
                            //     )
                            //         .then((response) => {
                            //             console.log(response);
                            //             if (response.ok) {
                            //                 return response.json();
                            //             }
                            //             return alert(
                            //                 'Invalid credentials. Please login again',
                            //             );
                            //         })
                            //         .then((data) => {
                            //             setUser(data);
                            //             console.log(user);
                            //             setSubmitting(false);
                            //         });
                            // } catch (error) {}
                        }}>
                        {({ touched, errors, isSubmitting, resetForm }) => (
                            <div>
                                <div
                                    className={`form ${
                                        isEdit ? 'form-style' : ''
                                    }`}>
                                    <Form>
                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='petName'
                                                className='label-style'>
                                                Name
                                            </label>
                                            <Field
                                                type='name'
                                                name='petName'
                                                placeholder='Enter name'
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
                                            <label
                                                htmlFor='petAge'
                                                className='mt-3 label-style'>
                                                Age (in years)
                                            </label>
                                            <Field
                                                type='number'
                                                name='petAge'
                                                placeholder='Enter age'
                                                className={`mt-2 form-control
                          ${
                              touched.petAge && errors.petAge
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />
                                            <ErrorMessage
                                                component='div'
                                                name='petAge'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='petGender'
                                                className='label-style'>
                                                Gender
                                            </label>
                                            <Field
                                                type='text'
                                                name='petGender'
                                                placeholder='Enter gender'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.petGender && errors.petGender
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='petGender'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='petBreed'
                                                className='label-style'>
                                                Breed
                                            </label>
                                            <Field
                                                type='text'
                                                name='petBreed'
                                                placeholder='Enter breed'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.petBreed && errors.petBreed
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='petBreed'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='petHairCoatType'
                                                className='label-style'>
                                                Hair Coat Type (select one)
                                            </label>

                                            <Field
                                                as='select'
                                                name='petHairCoatType'
                                                className={`mt-2 form-control
                          ${
                              touched.petHairCoatType && errors.petHairCoatType
                                  ? 'is-invalid'
                                  : ''
                          }`}>
                                                <option defaultValue>
                                                    Select
                                                </option>
                                                <option value='long'>
                                                    Long
                                                </option>
                                                <option value='medium'>
                                                    Medium
                                                </option>
                                                <option value='short'>
                                                    Short
                                                </option>
                                                <option value='double-coat'>
                                                    Double-Coat
                                                </option>
                                                <option value='curly-coat'>
                                                    Curly-Coat
                                                </option>
                                                <option value='shiny-coat'>
                                                    Shiny-Coat
                                                </option>
                                                <option value='hairless'>
                                                    Hairless
                                                </option>
                                            </Field>
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='petColor'
                                                className='label-style'>
                                                Color
                                            </label>
                                            <Field
                                                type='text'
                                                name='petColor'
                                                placeholder='Enter color'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.petColor && errors.petColor
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='petColor'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='petWeight'
                                                className='label-style'>
                                                Weight (in kgs)
                                            </label>
                                            <Field
                                                type='number'
                                                name='petWeight'
                                                placeholder='Enter weight'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.petWeight && errors.petWeight
                                  ? 'is-invalid'
                                  : ''
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='petWeight'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='text-center'>
                                            {!isEdit && (
                                                <Button
                                                    type='reset'
                                                    text='clear all'
                                                    className='btn btn-style btn-block mt-4 button'
                                                    disabled={isSubmitting}
                                                    onClick={() => {}}>
                                                    Cancel
                                                </Button>
                                            )}

                                            {!isEdit && (
                                                <Button
                                                    type='reset'
                                                    text='clear all'
                                                    className='btn btn-style btn-block mt-4 button'
                                                    disabled={isSubmitting}
                                                    onClick={resetForm}>
                                                    Reset
                                                </Button>
                                            )}

                                            <Button
                                                type='submit'
                                                className='btn btn-style btn-block mt-4 button'
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

export default RegisterPet;
