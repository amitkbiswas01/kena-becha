import React from "react";
import { NavLink } from "react-router-dom";
import {
    MailIcon,
    PhoneIcon,
    ArrowCircleLeftIcon,
} from "@heroicons/react/solid";

import about from "assets/images/about.jpg";

function About() {
    return (
        <div className="min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-20 overflow-hidden">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 lg:pt-8 text-gray-800 md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">
                    <div className="mb-10 p-4 md:p-8 text-gray-600 font-light">
                        <NavLink
                            to="/"
                            className="mb-10 mt-20 text-lg font-light transform transition-all hover:scale-110 text-red-400 hover:text-red-600 flex justify-center md:justify-start items-center flex-col md:flex-row"
                        >
                            <ArrowCircleLeftIcon className="h-10 w-10 mb-2 md:mr-2 md:mb-0" />
                            <p>Go to homepage</p>
                        </NavLink>
                        <h1 className="font-black uppercase text-3xl lg:text-5xl text-red-400 mb-10">
                            কেনা-বেচা
                        </h1>
                        <p className="text-lg">
                            E-commerce Template made with React, Redux-Toolkit,
                            TailwindCSS, Formik etc.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ut et, odit numquam cumque recusandae labore
                            sit consequuntur excepturi rem rerum commodi quasi
                            consectetur magni totam temporibus nobis ad
                            laboriosam? Corporis, beatae. Ad sit distinctio
                            corrupti! Sunt nulla, laudantium sapiente ducimus
                            similique ipsa? Sit expedita alias distinctio? Vel
                            facere eius odio!
                        </p>
                    </div>
                    <div className="mb-20 md:mb-0 p-4 md:p-8 flex justify-center md:justify-start items-center">
                        <a
                            href="mailto:amitkbiswas01@gmail.com?subject=e-commerce-mail"
                            className="px-4 py-2 mr-4 text-lg font-light transform transition-all hover:scale-110 border-2 rounded-md border-red-400 hover:border-red-600 text-red-400 hover:text-red-600 flex flex-col md:flex-row justify-center md:justify-start items-center"
                        >
                            <MailIcon className="h-5 w-5 mr-2 hidden md:inline-block" />
                            <p>Email Us</p>
                        </a>
                        <a
                            href="tel:+555555"
                            className="px-4 py-2 text-lg font-light transform transition-all hover:scale-110 border-2 rounded-md border-red-400 hover:border-red-600 text-red-400 hover:text-red-600 flex flex-col md:flex-row justify-center items-center"
                        >
                            <PhoneIcon className="h-5 w-5 mr-2 hidden md:inline-block" />
                            <p>Contact Us</p>
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <img src={about} alt="guy with laptop on sofa vector" />
                </div>
            </div>
        </div>
    );
}

export default About;
