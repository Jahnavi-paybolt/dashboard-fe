"use client";

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 flex justify-between p-4">
                <div className="logo">
                    <img src="/logo.svg" alt="Logo" className="w-40" />
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Contact</a>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy & Terms</a>
                </div>
            </header>

            {/* Outer Box */}
            {/* w-full max-w-2xl min-h-[50vh]*/}
            <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center">
                {/* Inner Box */}
                {/* w-full */}
                <div className="border border-gray-300 rounded-lg flex flex-col justify-between px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
                        <p className="text-lg mb-6">Simplifying Payments & Amplifying Success</p>
                    </div>

                    <div className="flex flex-col space-y-4 w-full">
                        <button
                            className="flex items-center justify-center bg-white text-gray-800 border border-gray-300 py-3 px-4 w-full rounded-lg shadow-md hover:bg-gray-100"
                            onClick={handleGoogleClick}>
                            <FcGoogle className="mr-2" /> Continue with Google
                        </button>

                        <button
                            className="flex items-center justify-center bg-white text-gray-800 border border-gray-300 py-3 px-4 w-full rounded-lg shadow-md hover:bg-gray-100"
                            onClick={handleMicrosoftClick}>
                            <SiMicrosoft className="mr-2" /> Continue with Microsoft
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-gray-600 text-center">
                        <Link href="/sign-up" className="text-purple-800 hover:text-purple-700 underline">
                            Create a new account?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
