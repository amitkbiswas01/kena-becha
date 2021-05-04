import React from "react";
import { NavLink } from "react-router-dom";

import banner from "assets/images/banner.jpg";
import { SIGNUP, SHOP, CART } from "utils/constants";

export default function Home({ isLoggedIn }) {
    return (
        <section
            className="pt-12 md:pt-0 w-full mx-auto bg-gray-100 flex md:items-center bg-cover bg-right"
            style={{
                minHeight: "92vh",
                width: "auto",
                backgroundImage: `url(${banner})`,
            }}
        >
            <div
                className="w-full bg-white bg-opacity-70 flex justify-center items-center"
                style={{
                    minHeight: "92vh",
                }}
            >
                <div className="mx-auto flex flex-col w-3/4 md:w-1/2 justify-center items-center p-8 md:p-24 tracking-wide bg-white bg-opacity-80 rounded-2xl shadow-lg">
                    <h1 className="font-light text-6xl mb-12">
                        কেনাবেচা করুন সবকিছু
                    </h1>
                    <h2 className="text-black text-xl lg:text-2xl my-4 mb-12 text-center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Alias similique quod blanditiis excepturi sequi
                        necessitatibus. Dolorem ullam explicabo ab sit!
                    </h2>
                    <div className="flex flex-col md:flex-row">
                        <NavLink
                            className="px-4 py-2 mb-4 md:mr-4 inline-block text-lg font-light transform transition-all hover:scale-110 border-2 border-red-400 hover:border-red-600 text-gray-800 rounded-sm"
                            to={isLoggedIn ? CART : SIGNUP}
                        >
                            {isLoggedIn ? "Go to Cart" : "Register Now"}
                        </NavLink>
                        <NavLink
                            className="px-4 py-2 mb-4 md:mr-4 inline-block text-lg font-light transform transition-all hover:scale-110 border-2 border-red-400 hover:border-red-600 text-gray-800 rounded-sm"
                            to={SHOP}
                        >
                            Visit Shop
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
