import Image from "next/image";

export default function BodySection() {
    return (
        <div className="bg-white rounded-lg shadow dark:bg-gray-900 mt-4 text-center items-center h-[100%]">
            
            <div className="first-section">
                <h1 className="text-white-500 text-6xl pt-40 pl-20 pr-20">Lorem Ipsum Where does it come from</h1>
                <h1 className="text-gray-400 text-xl mt-5 pl-20 pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                <button className="bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mt-8 mb-20">Start for Free</button>
                <div className="flex items-center justify-center"> 
                    <Image src="/Images/body-coding.jpg" alt="Hero" width={1000} height={800} className=" rounded-lg mt-5" />        
                </div>
            </div>

            <div className="second-section mt-20 pb-20">
                <h1 className="text-gray-400 text-l mb-7">Use by the best researchers</h1>
                <div className="flex items-center justify-center mt-3"> 
                    <Image src="/SVG/google.svg" alt="Hero" width={50} height={50} className=" rounded-lg mr-32 " />
                    <Image src="/SVG/website-logo.svg" alt="Hero" width={50} height={50} className=" rounded-lg mr-32" />        
                    <Image src="/SVG/windows.svg" alt="Hero" width={50} height={50} className=" rounded-lg" />                
                </div>
            </div>

            <div className="bg-gradient-to-b from-custom-green-dark to-black text-white-500 rounded-md">
                <h1 className="text-center font-semibold underline text-white-500 text-4xl pt-10 pb-10">These are amazing Images.</h1>
                <div className="md:grid md:grid-cols-2 md:gap-3 mb-4">
                    {/* First Section of Images */}
                    <div style={{ position: 'relative', width: '100%', height:'100' }}>
                        <Image src="/Images/Image_One.jpg" alt="Hero" width={1100} height={800} className="mb-3 px-2 rounded-2xl" />
                    </div>

                    <div style={{ position: 'relative', width: '100%', height:'100' }}>
                        <Image src="/Images/Image_Two.jpg" alt="Hero" width={1100} height={800} className="mb-3 px-2 rounded-2xl" />   
                    </div>

                    <div style={{ position: 'relative', width: '100%', height:'100' }}>
                        <Image src="/Images/Image_Three.jpg" alt="Hero" width={1100} height={800} className="mb-3 px-2 rounded-2xl" />
                    </div>

                    <div style={{ position: 'relative', width: '100%', height:'100' }}>
                        <Image src="/Images/body-coding.jpg" alt="Hero" width={1100} height={800} className="mb-3 px-2 rounded-2xl" />    
                    </div>                                         
                </div>

                <div className="bg-gradient-to-b from-custom-green to-black third-section w-100 h-100 pt-20 pb-20 ml-10 mr-10 mb-10 rounded-xl">
                    <p className="text-white-500 text-5xl pl-20 pr-20">Where can I get some?</p>
                    <p className="text-gray-400 text-xl pt-10 pl-20 pr-20">Nemo enim ipsam - voluptatem quia.</p>
                    <button className="bg-white cursor-pointer hover:bg-gray-300 text-black font-bold py-3 px-6 rounded mt-8">Begin {'->'}</button>
                </div>
            </div>
        </div>
    );
}