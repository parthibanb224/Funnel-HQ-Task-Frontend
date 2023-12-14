import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VerificationSuccess = () => {
    const { token } = useParams();
    const [verificationStatus, setVerificationStatus] = useState(null);

    useEffect(() => {
        const URL = import.meta.env.MODE === 'development' ? `${import.meta.env.VITE_REACT_APP_DEV_URL_FOR_BACKEND}/verify/${token}` : `${import.meta.env.VITE_REACT_APP_PRO_URL_FOR_BACKEND}/verify/${token}`;
        axios.get(URL)
        .then(response => setVerificationStatus(response.data))
        .catch(error => console.log(error));
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {verificationStatus && verificationStatus.success ? (
                <>
                    <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
                        Email Verification Successful!
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Your email has been successfully verified. You can now proceed to login.
                    </p>
                    <Link to="/" className="text-blue-500 hover:underline">
                        Go to Login
                    </Link>
                </>
            ) : (
                <p className="text-red-500">
                    Email verification failed. Please try again or contact support.
                </p>
            )}
        </div>
    );
};

export default VerificationSuccess;
