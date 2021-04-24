import React from "react";

import SharedRoutes from "./shared.routes";
import { LOGIN, SIGNUP } from "utils/constants";
import Navbar from "./components/navbar/navbar";

export const profileItems = [
    { name: "Login", href: LOGIN },
    { name: "Sign up", href: SIGNUP },
];

export default function Shared() {
    return (
        <>
            <Navbar profileItems={profileItems} />
            <main>
                <SharedRoutes />
            </main>
        </>
    );
}
