"use client";
import './style.css';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { SiMicrosoft } from 'react-icons/si';

export default function SignIn() {
    const handleGoogleClick = async () => {
        console.log("Google button clicked");
    }

    const handleMicrosoftClick = async () => {
        console.log("Microsoft button clicked");
        
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br h-screen from-[#EBD3F8] to-[#AD49E1]">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 flex justify-between p-4">
                <div className="logo">
                    <img src="/logo.svg" alt="Logo" className="w-52" />
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Contact</a>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy & Terms</a>
                </div>
            </header>

            {/* Outer Box */}
            {/* w-full max-w-2xl min-h-[50vh]*/}
            <div className="bg-[#EBD3F8] rounded-2xl shadow-2xl w-4/12  h-4/6 p-8 flex items-center justify-center -translate-x-64 cls_big mt-28">
                {/* Inner Box */}
                {/* w-full */}
                <div className="border border-[#534659] flex flex-col rounded-lg justify-between w-10/12 h-5/6">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold mt-24">Sign In</h1>
                    </div>

                    <div className="flex flex-col space-y-4 w-full">
                        <button
                            className="cls flex items-center justify-center bg-white text-gray-800 border border-gray-300 py-4 px-4 ml-7 w-96 rounded-2xl shadow-2xl hover:bg-gray-100"
                            onClick={handleGoogleClick}>
                            <FcGoogle className="mr-2" /> Continue with Google
                        </button>

                        <button
                            className="cls flex items-center justify-center bg-white text-gray-800 border border-gray-300 py-4 px-4 ml-7 w-96 rounded-lg shadow-md hover:bg-gray-100"
                            onClick={handleMicrosoftClick}>
                            <SiMicrosoft className="mr-2" /> Continue with Microsoft
                        </button>
                    </div>

                    <p className="mb-20 text-sm text-gray-600 text-center">
                        <Link href="/sign-up" className="text-purple-800 hover:text-purple-700 underline">
                            Create a new account?
                        </Link>
                    </p>
                </div>
            </div>

            <div>
                <p className="cls1 text-4xl text-purple-900 font-extrabold -translate-y-96 translate-x-72 justify-betweeen">Simplifying Payments <br />&<br /> Amplifying Success</p>
            </div>
        </div>
    );
}
