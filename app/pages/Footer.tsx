import Image from "next/image";
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear}. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
