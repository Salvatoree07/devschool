import React from "react";

function Features(){
    return (
        <div className="p-4 md:p-44">
            <span className="text-green-500 text-2xl">___</span>
            <span className="text-xl  ml-2 p-3 mb-4 font-bold">OUR VALUE</span>
            <h2 className="p-4 md:px-0 md:pt-10 text-4xl leading-10 mb-3 text-blue-950 xl:pr-[30rem] ">
                    A melting pot for the 
                    best idea  
            </h2>
            <div className="relative flex flex-col  lg:flex-row lg:space-x-44 lg:items-center">
                <div className="relative"> 
                    <div className="flex space-x-10 mb-10 relative">
                        <div className="size-12 shadow-sm shadow-slate-400 rounded-md flex justify-center items-center">

                            <img src="/img/heart-red.png" alt="" className="size-5 "/>
                            </div>
                        <div className="">
                            <h3 className="font-bold text-xl mb-2">Integrity</h3>
                            <p className="text-gray-700 text-md">We hold ourself to a strong ethical and 
                            moral code</p>
                        </div>
                    </div>
                    <div className="flex space-x-10 mb-10">
                        <div className="size-12 shadow-sm shadow-slate-400 rounded-md flex justify-center items-center">
                            <img src="/img/heart-green.png" alt="" className="size-5"/>
                            </div>
                        <div className="">
                            <h3 className="font-bold text-xl mb-2">Trust</h3>
                            <p className="text-gray-700 text-md">We are dependable loyal and hard working
                            to archive the same goal.</p>
                        </div>
                    </div>
                    <div className="flex space-x-10 mb-10">
                        <div className="size-12 shadow-sm shadow-slate-400 rounded-md flex justify-center items-center">
                            <img src="/img/heart-orange.png" alt="" className="size-5"/>
                            </div>
                        <div className="">
                            <h3 className="font-bold text-xl mb-2">Excellence</h3>
                            <p className="text-gray-700 text-md">We consistenly strive to do high-quality work
                            and give no room for errore</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center">
                    <img src="./img/about-hero.png" alt="" className=" rounded-[100px] relative "/>
                    <img src="./img/rectangle.png" alt="" className="hidden lg:block absolute -top-10 -left-16 size-40 " />
                </div>
            </div>
            
            

        </div>
    )
}

export default Features;