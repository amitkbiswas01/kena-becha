import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

import fourZeroFour from "assets/images/404.jpg";

export default function NotFound() {
    return (
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center p-5 lg:p-20 overflow-hidden relative">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">
                    <div className="mb-10 md:mb-20 text-gray-600 font-light">
                        <h1 className="font-black uppercase text-3xl lg:text-5xl text-red-400 mb-10">
                            You seem to be lost!
                        </h1>
                        <p className="font-black text-xl lg:text-2xl">
                            The page you're looking for isn't available.
                        </p>
                        <p className="text-lg">
                            Try searching again or use the Go Back button below.
                        </p>
                    </div>
                    <div className="mb-20 md:mb-0">
                        <NavLink
                            to="/"
                            className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-red-400 hover:text-red-600 flex justify-center md:justify-start items-center"
                        >
                            <ArrowCircleLeftIcon className="h-10 w-10 mr-2" />
                            <p>Go Back</p>
                        </NavLink>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <img src={fourZeroFour} alt="page not found" />
                </div>
            </div>
        </div>
    );
}
