import Image from "next/image";
import CustomHeader from "../components/Header";
import React from "react";

export default function Header() {
    return (
        <div className="min-h-screen"> 

            <CustomHeader />

            <div className="justify-center items-center text-center mb-20 mt-20">
                <h1 className="text-white font-semibold text-1xl mt-5">Pricing</h1>
                <h2 className="text-5xl mt-5 font-bold">Upgrade your Account Experience.</h2>      
                <h1 className="text-gray-400 font-semibold text-1xl mt-5">Those who do groundbreaking work deserve the best tools.</h1>
            </div>
           
           {/* pricing section */}
           <div className="pb-10 xl:flex xl:justify-center xl:items-center lg:ml-25p lg:mr-25p">
            <div className="bg-gray-800 border w-full border-gray-400 p-8 rounded-lg shadow-lg mb-5" style={{width:"425px"}}>
                    <h2 className="text-2xl font-bold">Free</h2>
                    <h1 className="text-gray-400 text-1xl mt-5">Free for everyone, forever!</h1>
                    
                    <div className="flex mt-5 mb-5">
                        <h2 className="text-2xl font-bold">$0</h2>
                        <h1 className="text-gray-400 text-1xl mt-2">/month</h1>
                    </div>

                    <div className="mb-4">
                        <h1 className="text-gray-400 text-1xl">Unlimited highlight explanations</h1>
                        <h1 className="text-gray-400 text-1xl">Ask follow-up questions</h1>
                        <h1 className="text-gray-400 text-1xl">Powered by ChatGPT</h1>  
                    </div>
                        
                    <button
                        className="px-4 mt-2 py-2 w-full text-1.5xl font-medium border bg-black text-gray-400 border-gray-400 rounded-sm hover:bg-white hover:text-black"
                        type="submit">
                        Get Started For Free
                    </button>
                </div>

                <div className="bg-gray-800 border w-full border-gray-400 p-8 rounded-lg shadow-lg justify-center mb-5 xl:pt-20 xl:pb-10" style={{width:"425px"}}>
                    <h2 className="text-2xl font-bold">Plus</h2>
                    <h1 className="text-gray-400 text-1xl mt-5">An advanced reading experience.</h1>
                    
                    <div className="flex mt-5 mb-5">
                        <h2 className="text-2xl font-bold">$12</h2>
                        <h1 className="text-gray-400 text-1xl mt-2">/month</h1>
                    </div>

                    <div className="mb-4">
                        <h1 className="text-gray-400 text-1xl">Generate summaries of any upload</h1>
                        <h1 className="text-gray-400 text-1xl">See all your highlights and explanations</h1>
                        <h1 className="text-gray-400 text-1xl">Search through papers (soon)</h1>  
                    </div>
                        
                    <button
                        className="px-4 mt-2 py-2 w-full text-1.5xl font-medium border bg-white text-black border-gray-400 rounded-sm hover:bg-black hover:text-white"
                        type="submit">
                        Upgrade plan
                    </button>
                </div>

                <div className="bg-gray-800 border w-full border-gray-400 p-8 rounded-lg shadow-lg justify-center mb-5" style={{width:"425px"}}>
                    <h2 className="text-2xl font-bold">Pro</h2>
                    <h1 className="text-gray-400 text-1xl mt-5">For professional reaserch.</h1>
                    
                    <div className="flex mt-5 mb-5">
                        <h2 className="text-2xl font-bold">$20</h2>
                        <h1 className="text-gray-400 text-1xl mt-2">/month</h1>
                    </div>

                    <div className="mb-4">
                        <h1 className="text-gray-400 text-1xl">Unlimited highlight explanations</h1>
                        <h1 className="text-gray-400 text-1xl">Ask follow-up questions</h1>
                        <h1 className="text-gray-400 text-1xl">Powered by ChatGPT</h1>  
                    </div>
                        
                    <button
                        className="px-4 mt-2 py-2 w-full text-1.5xl font-medium border bg-black text-gray-400 border-gray-400 rounded-sm hover:bg-white hover:text-black"
                        type="submit">
                        Upgrade plan
                    </button>
                </div>
           </div>
        </div>
    );
}
