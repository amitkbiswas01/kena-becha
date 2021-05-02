import React from "react";
import Loader from "shared/components/loader/loader";

export default function ProfileView({
    orderItems,
    user,
    updateHandler,
    loader,
}) {
    return (
        <section className="w-screen">
            <div className="md:p-12 md:pt-24 flex flex-col md:flex-row justify-center items-start">
                {/* profile card */}
                <div className="w-full md:w-1/3">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h1 className="text-gray-900 mt-8 mb-4 text-4xl">
                            {`${user.firstname} ${user.lastname}`}
                            <span className="text-lg font-normal text-red-600">
                                {`  @${user.username}`}
                            </span>
                        </h1>
                        <h3 className="mt-8 text-2xl font-bold border-b-2">
                            Contact Info
                        </h3>
                        <div className="mb-16 mt-2 flex justify-between items-center">
                            <h3 className="text-gray-800 text-xl font-light">
                                {user.email}
                            </h3>
                            <h3 className="text-gray-800 text-xl font-light">
                                {user.phone}
                            </h3>
                        </div>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Role</span>
                                <span className="ml-auto">
                                    <span className="bg-red-500 py-1 px-2 rounded text-white text-sm">
                                        {user.role}
                                    </span>
                                </span>
                            </li>
                            <li className="w-full flex items-center justify-between py-3">
                                Address
                                <div className="w-1/2 text-right">{`${user.number} - ${user.street} - ${user.city} - ${user.zipcode}`}</div>
                            </li>
                        </ul>
                        <div className="mt-8 w-full">
                            <button
                                className="w-full btn text-gray-100 bg-gray-600 border-0 font-medium"
                                onClick={() => updateHandler(user._id)}
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
                {/* order list */}
                <div className="w-full md:w-2/3 md:mx-auto my-24 md:my-0 flex flex-col justify-center items-center">
                    <h1 className="font-light text-4xl mb-8">List of Orders</h1>
                    <div
                        className="w-full overflow-auto border-2 md:ml-12 rounded-lg"
                        style={{ height: "30rem" }}
                    >
                        {loader ? (
                            <Loader />
                        ) : (
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
                                            Shipping Address
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {orderItems &&
                                        orderItems.map(
                                            (
                                                { status, date, userId },
                                                index,
                                            ) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="text-md text-gray-900">
                                                                {status ===
                                                                0 ? (
                                                                    <span className="inline-block bg-yellow-300 p-2 rounded-full">
                                                                        Pending
                                                                    </span>
                                                                ) : (
                                                                    <span className="bg-green-300 inline-block p-2 rounded-full">
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
                                                    <td className="px-6 py-4">
                                                        {`${userId.address.number} - ${userId.address.street} - ${userId.address.city} - ${userId.address.zipcode}`}
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
