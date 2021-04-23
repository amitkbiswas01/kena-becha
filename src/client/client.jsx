import React from "react";
import { LOGOUT } from "shared/constants";

export const profileItems = [
    { name: "Profile", href: "/profile" },
    { name: "Sign out", href: LOGOUT },
];

export default function Client() {
    return <div>This is client page</div>;
}
