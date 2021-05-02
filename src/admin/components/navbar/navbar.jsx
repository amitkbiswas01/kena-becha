import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    UserCircleIcon,
    ViewGridIcon,
    BriefcaseIcon,
    ShoppingCartIcon,
    ArrowCircleLeftIcon,
} from "@heroicons/react/solid";

import {
    LOGOUT,
    ADMIN_USERS,
    ADMIN_PRODUCTS,
    ADMIN_ORDERS,
    ADMIN_CATEGORIES,
} from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector } from "client/components/profile/profile.slice";
import { getUserInfo } from "client/components/profile/profile.thunk";

export default function AdminNavbar() {
    const dispatch = useDispatch();
    const user = useSelector(userInfoSelector);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    const navItems = [
        {
            name: "users",
            to: ADMIN_USERS,
            component: <UserCircleIcon className="h-5 w-5" />,
        },
        {
            name: "products",
            to: ADMIN_PRODUCTS,
            component: <BriefcaseIcon className="h-5 w-5" />,
        },
        {
            name: "categories",
            to: ADMIN_CATEGORIES,
            component: <ViewGridIcon className="h-5 w-5" />,
        },
        {
            name: "orders",
            to: ADMIN_ORDERS,
            component: <ShoppingCartIcon className="h-5 w-5" />,
        },
    ];
    return (
        <nav className="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
            {/* header */}
            <div className="flex items-center border-b-2 border-gray-600 lowercase justify-center pb-2">
                <span className="text-xl font-semibold dark:text-gray-300">
                    কেনা-বেচা
                </span>
            </div>
            {/* user info */}
            <div className="mt-8">
                <h2 className="mt-4 text-2xl dark:text-gray-300 font-extrabold capitalize">
                    {`Hello ${user.firstname} ${user.lastname}!`}
                </h2>
                <h4 className="font-semibold text-red-600 lowercase text-lg dark:text-green-300">
                    {`@${user.username}`}
                </h4>
            </div>
            {/* navbar links */}
            <ul className="mt-2 text-gray-600">
                {navItems.map((item, index) => {
                    return (
                        <li key={index} className="mt-8">
                            <NavLink
                                to={item.to}
                                className="flex"
                                activeClassName="shadow py-3 pl-4 bg-white rounded-lg"
                            >
                                {item.component}
                                <span
                                    className="ml-2 capitalize font-medium text-black
						dark:text-gray-300"
                                >
                                    {item.name}
                                </span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            {/* logout */}
            <div className="mt-auto mx-auto flex items-center py-2 px-6 rounded-lg text-gray-700 hover:bg-gray-600 hover:text-white">
                <NavLink
                    to={LOGOUT}
                    className="flex justify-center items-center"
                >
                    <ArrowCircleLeftIcon className="h-5 w-5" />
                    <span className="ml-2 capitalize font-medium">log out</span>
                </NavLink>
            </div>
        </nav>
    );
}
