import React from "react";

import { ShoppingCartIcon } from "@heroicons/react/solid";

export default function ShopView({
    products,
    viewDetails,
    isLoggedIn,
    cartHandler,
    cartLoader,
}) {
    if (typeof cartLoader !== "boolean") cartLoader = false;
    return (
        <section>
            <div className="w-3/4 mx-auto flex flex-col py-16">
                <h2 className="text-4xl">Some of the products</h2>
                <p className="text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Hic veritatis illum, laudantium natus architecto animi!
                </p>
            </div>
            <div className="container mx-auto flex flex-wrap items-center justify-center md:px-16 pt-4 pb-12">
                {products.map((product, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full md:w-1/3 xl:w-1/4 px-16 py-6 md:p-6 rounded-lg flex flex-col hover:shadow-xl"
                            style={{ minWidth: "15rem" }}
                        >
                            <img
                                className="hover:grow object-contain h-48 w-full cursor-pointer"
                                src={product.image}
                                alt={product.title}
                                onClick={() => viewDetails(product._id)}
                            />
                            <div
                                className="pt-3 flex items-center justify-between cursor-pointer"
                                onClick={() => viewDetails(product._id)}
                            >
                                <p className=" w-3/4 text-wrap">
                                    {product.title}
                                </p>
                                <p className="pt-2 text-gray-900 text-right font-semibold">
                                    ${product.price}
                                </p>
                            </div>
                            <div className="w-full pt-4 flex justify-between items-center">
                                <p className="rounded-full text-white bg-red-500 px-2 py-1 text-xs font-bold">
                                    {product.category.name}
                                </p>
                                {isLoggedIn && (
                                    <button
                                        className="btn text-sm font-bold px-2 py-1 hover:text-white hover:bg-red-500"
                                        disabled={cartLoader}
                                        onClick={() =>
                                            cartHandler(product._id, "add")
                                        }
                                    >
                                        <ShoppingCartIcon className="w-5 h-5 inline-block mr-1" />{" "}
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
