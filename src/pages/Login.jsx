import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageImg from '../assets/bubble-gum-digital-security-with-password-protected-email.gif';
import showPwdImg from '../assets/Show-password.svg';
import hidePwdImg from '../assets/Hide-password.svg';
import { useAuth } from "../context/Auth.context";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Login = () => {
    const [passwordMode, setPasswordMode] = useState(false)
    const { input, setInput, handleLogin } = useAuth();

    return (
        <section className="md:h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-5 md:mx-0 md:my-0 bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="md:w-1/2 max-w-xl md:block">
                <img
                    src={LoginPageImg}
                    alt="Sample image"
                    className=" w-96 h-96 object-cover"
                />
            </div>
            <div className="md:w-1/2 max-w-lg flex justify-center items-center p-4 md:p-0">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleLogin}>
                        <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-600">
                            Welcome Back!
                        </h1>
                        <div className="flex justify-center mb-4">
                            <FcGoogle className="text-3xl mr-4 cursor-pointer" />
                            <FaFacebook className="text-3xl mr-4 cursor-pointer" />
                            <FaLinkedin className="text-3xl cursor-pointer" />
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
                                onChange={e => setInput({ ...input, mail: e.target.value })}
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
                                    onChange={e => setInput({ ...input, password: e.target.value })}
                                />
                                <img
                                    className=" absolute cursor-pointer right-5 top-2 w-5 "
                                    title={passwordMode ? "Hide password" : "Show password"}
                                    src={passwordMode ? showPwdImg : hidePwdImg}
                                    onClick={() => setPasswordMode(prevState => !prevState)}
                                    alt='password gif'
                                />
                            </div>
                            <Link to="/forgot" className=" float-right text-sm">Forgot password?</Link>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-2"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                        <p className="text-center mt-4 text gray-500 text-xs">
                            Don't have an account?{" "}
                            <Link to={"/signup"} className="text-indigo-500">
                                SIGN UP
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

export default Login;