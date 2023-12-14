import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import showPwdImg from '../assets/Show-password.svg';
import hidePwdImg from '../assets/Hide-password.svg';
import axios from "axios";

const ResetPassword = () => {
    const [passwordMode, setPasswordMode] = useState(false);
    const { token } = useParams();
    const [passwordCheck, setPasswordCheck] = useState([]);


    const Navigate = useNavigate();
    const handleResetPassword = (event) => {
        event.preventDefault();
        if (passwordCheck.newPassword === passwordCheck.confirmPassword) {
            const RESET_URL = import.meta.env.MODE === 'development' ? `${import.meta.env.VITE_REACT_APP_DEV_URL_FOR_BACKEND}/reset/${token}` : `${import.meta.env.VITE_REACT_APP_PRO_URL_FOR_BACKEND}/reset/${token}`;
            axios.patch(RESET_URL, { password: passwordCheck.newPassword })
                .then(response => {
                    if (response.data.success) {
                        Navigate('/');
                    }
                })
                .catch(err => {
                    alert("Something Went Wrong", err);
                });
        }
        else {
            alert("password doesn't match pls check");
        }
    }

    return (
        <section className="md:h-screen h-screen flex flex-col md:flex-row justify-center items-center md:mx-0 md:my-0 bg-gradient-to-br from-blue-500 to-indigo-600">
            {/* <div className="md:w-1/2"></div> */}
            <div className="md:w-1/2 max-w-lg flex justify-center items-center p-4 md:p-0">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleResetPassword}>
                        <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-600">
                            Reset Password
                        </h1>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2`}
                                    id="password"
                                    placeholder="********"
                                    type={passwordMode ? "text" : "password"}
                                    onChange={e => setPasswordCheck({ ...passwordCheck, newPassword: e.target.value })}
                                />
                                <img
                                    className=" absolute cursor-pointer right-5 top-2 w-5 "
                                    title={passwordMode ? "Hide password" : "Show password"}
                                    src={passwordMode ? showPwdImg : hidePwdImg}
                                    onClick={() => setPasswordMode((prevState) => !prevState)}
                                    alt='password gif'
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2`}
                                    id="password"
                                    placeholder="********"
                                    type={passwordMode ? "text" : "password"}
                                    onChange={e => setPasswordCheck({ ...passwordCheck, confirmPassword: e.target.value })}
                                />
                                <img
                                    className=" absolute cursor-pointer right-5 top-2 w-5 "
                                    title={passwordMode ? "Hide password" : "Show password"}
                                    src={passwordMode ? showPwdImg : hidePwdImg}
                                    onClick={() => setPasswordMode((prevState) => !prevState)}
                                    alt='password gif'
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-2"
                                type="submit"
                            >
                                Set New Password
                            </button>
                        </div>
                        <p className="text-center mt-4 text-gray-500 text-xs">
                            Remember your password?{" "}
                            <Link to={"/"} className="text-indigo-500">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;
