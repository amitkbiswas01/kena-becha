import React from "react";
import { NavLink } from "react-router-dom";

import { SHOP, ABOUT, SIGNUP, LOGIN } from "utils/constants";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 pt-12 md:pt-24 pb-6 flex-shrink-0">
            <div className="w-3/4 mx-auto text-gray-800 flex flex-col md:flex-row justify-center items-center">
                <div className="p-5 w-full">
                    <div className="text-xl uppercase text-gray-500 font-medium">
                        Home
                    </div>
                    <NavLink
                        className="my-3 block hover:text-red-600"
                        to={SHOP}
                    >
                        Shop{" "}
                        <span className="text-red-600 text-xs p-1">
                            Visit now
                        </span>
                    </NavLink>
                    <NavLink
                        className="my-3 block hover:text-red-600"
                        to={ABOUT}
                    >
                        About Us{" "}
                        <span className="text-red-600 text-xs p-1"></span>
                    </NavLink>
                </div>
                <div className="p-5 w-full">
                    <div className="text-xl uppercase text-gray-500 font-medium">
                        User
                    </div>
                    <NavLink
                        className="my-3 block hover:text-red-600"
                        to={LOGIN}
                    >
                        Login <span className="text-red-600 text-xs p-1"></span>
                    </NavLink>
                    <NavLink
                        className="my-3 block hover:text-red-600"
                        to={SIGNUP}
                    >
                        Register{" "}
                        <span className="text-red-600 text-xs p-1"></span>
                    </NavLink>
                    <NavLink className="my-3 block hover:text-red-600" to="">
                        Surveys{" "}
                        <span className="text-red-600 text-xs p-1">New</span>
                    </NavLink>
                </div>
                <div className="p-5 w-full">
                    <div className="text-xl uppercase text-gray-500 font-medium">
                        Support
                    </div>
                    <NavLink className="my-3 block hover:text-red-600" to="">
                        Help Center{" "}
                        <span className="text-red-600 text-xs p-1"></span>
                    </NavLink>
                    <NavLink className="my-3 block hover:text-red-600" to="">
                        Privacy Policy{" "}
                        <span className="text-red-600 text-xs p-1">
                            Updated
                        </span>
                    </NavLink>
                    <NavLink className="my-3 block hover:text-red-600" to="">
                        Conditions{" "}
                        <span className="text-red-600 text-xs p-1"></span>
                    </NavLink>
                </div>
                <div className="p-5 w-full">
                    <div className="text-xl uppercase text-gray-500 font-medium">
                        Contact us
                    </div>
                    <p className="my-3 block hover:text-red-600">
                        55/A, Kamal Ataturk Avenue, Banani, Dhaka, Bangladesh{" "}
                        <span className="text-red-600 text-xs p-1"></span>
                    </p>
                    <a
                        className="my-3 block hover:text-red-600"
                        href="mailto:amitkbiswas01@gmail.com?subject=e-commerce-mail"
                    >
                        Email Us
                        <span className="text-red-600 text-xs p-1"></span>
                    </a>
                    <a
                        className="my-3 block hover:text-red-600"
                        href="tel:+555555"
                    >
                        Call Us
                        <span className="text-red-600 text-xs p-1"></span>
                    </a>
                </div>
            </div>
            <div
                className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
            >
                <div className="mt-2">
                    © Copyright 2021. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
