import Image from "next/image";
import Link from 'next/link';
import React from "react";

export default function Header() {
    return (
        <header className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <nav className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <Image src="/ReactTypeScriptFrontendTemplate/SVG/website-logo.svg" alt="Hero" width={40} height={40} className=" rounded-lg" />
                    {/* <h1 className="text-white ml-2 font-bold text-xl"> LOGO </h1> */}
                    <h1 className="text-white font-bold text-xl ml-2 hover:text-gray-300">FrontEndDesign</h1>
                
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <h1 className="text-gray-300 font-bold text-xl sm:hidden hover:text-white pt-2"><Link href="/pricing">Pricing</Link></h1>
                    </li>
                    <li>
                        <h1 className="text-gray-300 font-bold text-xl sm:hidden hover:text-white  pt-2"><Link href="/signup">Sign Up</Link></h1>
                    </li>
                    <li>
                        <h1 className="bg-white p-2 rounded-md text-black font-bold cursor-pointer text-xl hover:bg-gray-300">Get Started</h1>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
