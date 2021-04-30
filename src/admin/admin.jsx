import React from "react";

import AdminNavbar from "./components/navbar/navbar";
import AdminRoutes from "./admin.routes";

export default function Admin() {
    return (
        <div className="h-screen w-full relative top-0 left-0 flex">
            <AdminNavbar />
            <main className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition duration-500 ease-in-out overflow-y-auto">
                <AdminRoutes />
            </main>
        </div>
    );
}
