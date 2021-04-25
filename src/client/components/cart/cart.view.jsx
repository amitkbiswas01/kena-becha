import React from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";

export default function CartView({ loader, cartItems, cartHandler }) {
    return (
        <div className="min-w-screen min-h-screen">
            <div className="container mx-auto px-8 lg:px-16 pt-16 flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <h1 className="text-center font-light text-4xl my-8">
                                Cart Items
                            </h1>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-lg font-semibold text-gray-600 uppercase"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-lg font-semibold text-gray-600 uppercase"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-lg font-semibold text-gray-600 uppercase"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-lg font-semibold text-gray-600 uppercase"
                                        >
                                            Total Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {cartItems &&
                                        cartItems.map(
                                            (
                                                { productId, quantity },
                                                index,
                                            ) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img
                                                                    className="h-10 w-auto"
                                                                    src={
                                                                        productId.image
                                                                    }
                                                                    alt={
                                                                        productId.title
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-md text-gray-900">
                                                                    {
                                                                        productId.title
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            ${productId.price}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap flex items-center justify-around">
                                                        <button
                                                            disabled={loader}
                                                            onClick={() =>
                                                                cartHandler(
                                                                    productId._id,
                                                                    "add",
                                                                )
                                                            }
                                                        >
                                                            <PlusCircleIcon className="h-8 w-8 text-green-500" />
                                                        </button>
                                                        <div className="text-lg font-light text-gray-900 cursor-pointer">
                                                            {quantity}
                                                        </div>
                                                        <button
                                                            disabled={loader}
                                                            onClick={() =>
                                                                cartHandler(
                                                                    productId._id,
                                                                    "remove",
                                                                )
                                                            }
                                                        >
                                                            <MinusCircleIcon className="h-8 w-8 text-red-500 cursor-pointer" />
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-md font-medium text-gray-900">
                                                            $
                                                            {(
                                                                productId.price *
                                                                quantity
                                                            ).toFixed(2)}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
