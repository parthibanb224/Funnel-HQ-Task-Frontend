import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupPageImg from '../assets/coworking-remote-work-1.gif';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useAuth } from "../context/Auth.context";
import showPwdImg from '../assets/Show-password.svg';
import hidePwdImg from '../assets/Hide-password.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [passwordMode, setPasswordMode] = useState(false);
    const { input, setInput, handleSignup, loaded } = useAuth();

    return (
        <section className="md:h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-5 md:mx-0 md:my-0 bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="md:w-1/2 max-w-xl md:block">
                <img
                    src={SignupPageImg}
                    alt="Sample image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="md:w-1/2 max-w-lg flex justify-center items-center p-4 md:p-0">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleSignup}>
                        <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-600">
                            Create an Account
                        </h1>
                        <div className="flex justify-center mb-4">
                            <FcGoogle className="text-3xl mr-4 cursor-pointer" />
                            <FaFacebook className="text-3xl mr-4 cursor-pointer" />
                            <FaLinkedin className="text-3xl cursor-pointer" />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="fullName"
                            >
                                Full Name
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2`}
                                id="fullName"
                                type="text"
                                placeholder="Enter your Full Name"
                                onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="mobileNumber"
                            >
                                Mobile Number
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="mobileNumber"
                                type="tel"
                                placeholder="Enter your Mobile Number"
                                onChange={(e) => setInput({ ...input, mobileNumber: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="mail"
                                type="email"
                                placeholder="Enter your Mail"
                                onChange={(e) => setInput({ ...input, mail: e.target.value })}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2`}
                                    id="password"
                                    placeholder="********"
                                    type={passwordMode ? "text" : "password"}
                                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                                />
                                <img
                                    className=" absolute cursor-pointer right-5 top-2 w-5 "
                                    title={passwordMode ? "Hide password" : "Show password"}
                                    src={passwordMode ? showPwdImg : hidePwdImg}
                                    onClick={() => setPasswordMode((prevState) => !prevState)}
                                    alt="password gif"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-2"
                                type="submit"
                            >
                                Sign Up
                            </button>
                            {loaded === "true" ? <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>Loading...</p> : <ToastContainer />}
                        </div>
                        <p className="text-center mt-4 text-gray-500 text-xs">
                            Already have an account?{" "}
                            <Link to={"/"} className="text-indigo-500">
                                LOGIN
                            </Link>
                        </p>
                        <p className="text-center text-gray-500 text-xs mt-4">
                            &copy;2023 FunnelHQ. All rights reserved.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;
