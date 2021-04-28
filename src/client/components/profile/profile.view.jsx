import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";

import login from "assets/images/login.jpg";

export default function ProfileView({ orderItems }) {
    return (
        <section className="w-screen">
            <div className="md:p-16 flex flex-col md:flex-row justify-center items-center">
                {/* profile card */}
                <div className="w-full md:w-1/3">
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <div className="image overflow-hidden">
                            <img
                                className="h-auto w-full mx-auto"
                                src={login}
                                alt=""
                            />
                        </div>
                        <h1 className="text-gray-900 mt-8 mb-4 font-bold text-2xl">
                            Jane Doe{" "}
                            <span className="text-base font-normal text-red-600">
                                username
                            </span>
                        </h1>
                        <div className="mb-4 flex justify-between items-center">
                            <h3 className="text-gray-800 text-xl font-light">
                                example@gmail.com
                            </h3>
                            <h3 className="text-gray-800 text-xl font-light">
                                01790063096
                            </h3>
                        </div>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Role</span>
                                <span className="ml-auto">
                                    <span className="bg-red-500 py-1 px-2 rounded text-white text-sm">
                                        Admin
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Address</span>
                                <span className="ml-auto">Faridpur</span>
                            </li>
                        </ul>
                        <div className="mt-8 w-full">
                            <button className="w-full btn text-gray-100 bg-gray-600 border-0 font-medium">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
                {/* order list */}
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                    <h1 className="font-light text-4xl mb-8">List of Orders</h1>
                    <div className="md:px-2 h-96 overflow-auto">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-lg font-semibold text-gray-600 uppercase"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-lg font-semibold text-gray-600 uppercase"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-lg font-semibold text-gray-600 uppercase"
                                    >
                                        Cancel
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white overflow-y-scroll divide-y divide-gray-200">
                                {orderItems &&
                                    orderItems.map(
                                        ({ status, date, products }, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="text-md text-gray-900">
                                                            {status === 0 ? (
                                                                <span className="inline-block bg-yellow-200 p-2 rounded-full">
                                                                    Pending
                                                                </span>
                                                            ) : (
                                                                <span className="bg-green-300">
                                                                    Delivered
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-lg font-light text-gray-900">
                                                        {new Date(
                                                            date,
                                                        ).toUTCString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap flex items-center justify-around">
                                                    <button>
                                                        <XCircleIcon className="h-8 w-8 text-green-500" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ),
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
