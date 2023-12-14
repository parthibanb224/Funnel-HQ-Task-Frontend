import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth.context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const { input, setInput, handleMail, loaded } = useAuth();

    return (
        <section className="md:h-screen h-screen flex flex-col md:flex-row justify-center items-center md:mx-0 md:my-0 bg-gradient-to-br from-blue-500 to-indigo-600">
            {/* <div className="md:w-1/2"></div> */}
            <div className="md:w-1/2 max-w-lg flex justify-center items-center p-4 md:p-0">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleMail}>
                        <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-600">
                            Forgot Password
                        </h1>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="email"
                                type="email"
                                placeholder="Enter your Mail"
                                onChange={(e) => setInput({ ...input, mail: e.target.value })}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-2"
                                type="submit"
                            >
                                Reset Password
                            </button>
                        </div>
                        {loaded === "true" ? <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>Loading...</p> : <ToastContainer />}
                        <p className="text-center mt-4 text-gray-500 text-xs">
                            Remember your password?{" "}
                            <Link to={"/login"} className="text-indigo-500">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgetPassword;
