import React from "react";
import { LOGOUT } from "utils/constants";

export const profileItems = [
    { name: "Profile", href: "/profile" },
    { name: "Sign out", href: LOGOUT },
];

export default function Client() {
    return <div>This is client page</div>;
}
