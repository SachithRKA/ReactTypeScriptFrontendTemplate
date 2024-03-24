import Image from "next/image";
import Link from 'next/link';

export default function Signup() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <div className="max-w-md w-full px-6 py-8 bg-black shadow-md rounded-md">
            <div className="mb-4 justify-center text-center">
                <h1 className="text-white text-4xl font-semibold">FrontEndWebsite</h1>
                <h1 className="text-gray-400 text-1xl">Let&apos;s get started!</h1>
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-1.5xl font-medium text-white" htmlFor="email">Email</label>
                <input
                    className="bg-black w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-1.5xl font-medium text-white" htmlFor="password">Password</label>
                <input 
                    className="bg-black w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                />
            </div>

            <div className="mb-4">
                <Link legacyBehavior href="/">
                    <button
                        className="w-full px-4 py-2 text-1.5xl font-medium border text-gray-400 border-gray-400 rounded-sm hover:bg-white hover:text-black"
                        type="submit">
                        Sign Up
                    </button>
                </Link>
            </div>

            <div className="mb-4">
                <Link legacyBehavior href="/Login">
                    <a className="text-gray-500 text-sm font-bold hover:text-gray-300 mr-10 float-left">Log In Instead</a>   
                </Link>
            </div>
        </div>
    </div>
    );
}