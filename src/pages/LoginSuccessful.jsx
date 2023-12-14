import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth.context";

const LoginSuccessful = () => {
    const {handleLogout} = useAuth();
    return (
        <section className="md:h-screen h-screen flex flex-col md:flex-row justify-center items-center md:mx-0 md:my-0 bg-gradient-to-br from-blue-500 to-indigo-600">
            {/* <div className="md:w-1/2"></div> */}
            <div className="md:w-1/2 max-w-lg flex justify-center items-center p-4 md:p-0">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold mb-6 text-blue-600">
                            Login Successful!
                        </h1>
                        <p className="text-gray-700 text-md mb-4">
                            Congratulations! You have successfully logged in.
                        </p>
                        <Link className="text-blue-500 hover:underline">
                            Go to Dashboard
                        </Link>
                        <div className="mt-4">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginSuccessful;
