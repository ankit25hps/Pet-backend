import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import "../login/Login.css";
import { AuthContext } from "../../../context/AuthContext";
import * as Constants from "../../../constants/constants";

const LoginSchema = Yup.object().shape({
    userName: Yup.string().required("Name is required"),
    userEmail: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    userPassword: Yup.string()
        .required("Password is required")
        .matches(
            /^.*(?=.{8,})(?!.* )((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number, one special case character and no white spaces"
        ),
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("userPassword"), null], "Passwords must match"),
});

function SignUp() {
    const { user, setUser } = useContext(AuthContext);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <Formik
                        initialValues={{
                            userName: "",
                            userEmail: "",
                            userPassword: "",
                            confirmPassword: "",
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true);
                            const userName = values.userName;
                            const userEmail = values.userEmail;
                            const userPassword = values.userPassword;
                            const data = { userName, userEmail, userPassword };
                            console.log(data);
                            // fetch(
                            //     `${Constants.LOGINBASEURL}/validatePetOwner`,
                            //     {
                            //         method: 'POST',
                            //         mode: 'cors',
                            //         headers: {
                            //             'Content-Type': 'application/json',
                            //             'Access-Control-Allow-Origin': '*',
                            //         },
                            //         body: JSON.stringify(values),
                            //     },
                            // ).then((response) => {
                            //     if (response.ok) {
                            //         return response.json();
                            //     }
                            //     return alert(
                            //         'Invalid credentials. Please login again',
                            //     );
                            // });
                        }}>
                        {({ touched, errors, isSubmitting }) => (
                            <div>
                                <div className='row mb-5'>
                                    <div className='col-lg-12 text-center'>
                                        <h1 className='mt-5'>SIGN UP</h1>
                                    </div>
                                </div>
                                <div className='form'>
                                    <Form>
                                        <div className='form-group form-label'>
                                            <label htmlFor='userName'>
                                                Name
                                            </label>
                                            <Field
                                                type='name'
                                                name='userName'
                                                placeholder='Enter name'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.userName && errors.userName
                                  ? "is-invalid"
                                  : ""
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='userName'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label htmlFor='userEmail'>
                                                Email
                                            </label>
                                            <Field
                                                type='email'
                                                name='userEmail'
                                                placeholder='Enter email'
                                                autoComplete='off'
                                                className={`mt-2 form-control
                          ${
                              touched.userEmail && errors.userEmail
                                  ? "is-invalid"
                                  : ""
                          }`}
                                            />

                                            <ErrorMessage
                                                component='div'
                                                name='userEmail'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='userPassword'
                                                className='mt-3'>
                                                Password
                                            </label>
                                            <Field
                                                type='password'
                                                name='userPassword'
                                                placeholder='Enter password'
                                                className={`mt-2 form-control
                          ${
                              touched.userPassword && errors.userPassword
                                  ? "is-invalid"
                                  : ""
                          }`}
                                            />
                                            <ErrorMessage
                                                component='div'
                                                name='userPassword'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='form-group form-label'>
                                            <label
                                                htmlFor='confirmPassword'
                                                className='mt-3'>
                                                Confirm Password
                                            </label>
                                            <Field
                                                type='password'
                                                name='confirmPassword'
                                                placeholder='Re-enter password'
                                                className={`mt-2 form-control
                          ${
                              touched.confirmPassword && errors.confirmPassword
                                  ? "is-invalid"
                                  : ""
                          }`}
                                            />
                                            <ErrorMessage
                                                component='div'
                                                name='confirmPassword'
                                                className='invalid-feedback'
                                            />
                                        </div>

                                        <div className='text-center'>
                                            <button
                                                type='submit'
                                                className='btn btn-dark btn-block mt-4 button'
                                                disabled={isSubmitting}>
                                                {!isSubmitting
                                                    ? "Sign Up"
                                                    : "Signing up"}
                                            </button>
                                        </div>
                                    </Form>
                                    <div className='text-center'>
                                        <a href='#' className='link'>
                                            Existing User? Login
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
