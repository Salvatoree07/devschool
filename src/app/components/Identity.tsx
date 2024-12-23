import React from "react";
import Image from "next/image";
function Identity (){
    return (
        <div className="bg-green-50 bg-[url('/img/line-twisted.png')] bg-no-repeat">
            
        <div className="flex flex-col container mx-auto py-20 md:flex-row md:space-x-12">
            <div className="flex relative mx-auto md:justify-end md:w-1/2 ">
                <div className="relative">
                    <Image src={"/img/about-hero.png"} alt="Prova" width={500} height={700} className="p-4 md:p-0 relative z-10"/>
                    <img src="./img/rectangle.png" alt="" className="absolute w-32 h-32  -left-5 z-0 -bottom-6"/>
                    {/* <img src="./img/about-hero.png" alt="" className=" p-4 md:p-0 relative z-10" /> */}
                    <div className="hidden md:block absolute bg-white rounded-xl p-4 text-sm -bottom-10 -right-10 z-40 h-40 w-80 ">
                        <p className="text-gray-500 ">
                            We want to build a world where great ideas, 
                            products, and companies come to fruition 
                            quickly whilst achieving the required impact. 
                            Our work is to facilitate the process.
                        </p>
                        <h3 className="font-bold mt-1">Rasheed Ogunusi</h3>
                        <h3 className="mt-1">CTO</h3>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2  mt-10 md:mt-6 xl:pr-40">
                <span className="text-green-500 text-2xl">___</span>
                <span className="text-xl  ml-2 p-3 font-bold">WHO WE ARE</span>
                <h2 className="p-4 md:p-0 pmt-4 font-bold text-3xl leading-10 mb-3 text-blue-950 ">We combine our experience and 
                    passion to develop solutions that 
                    empower businesses.
                </h2>
                <p className="p-4 md:p-0 leading-10 text-xl">
                    Lorem Ipsum is simply dummy text of the printing and  
                    industry. Lorem Ipsum has been the industry s standard 
                    text ever since the 1500s, when an unknown printer took
                    of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
        </div>
    )
}
export default Identity;