import React from "react";

function HeroDot(){
    return (
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-20 p-16 items-center justify-center relative bg-[#EBFAF4]">
            <div className="relative">
                <img src="./img/patner-img.jpg" alt="" className="rounded-3xl relative z-0 md:z-20"/>
                
            </div>
            <img src="./img/line-twisted.png" alt="" className="hidden md:block absolute opacity-50 top-1 z-10"/>
            <div className="relative">
                <span className="text-green-500 text-3xl relative z-0 md:z-20">___</span>
                <span className="text-4xl  ml-2 p-3 font-bold relative z-0 md:z-20">Expertise</span>
                <p className="mt-7 font-bold relative z-0 md:z-20">We provide reliable service to our client that is 
                unbeatable</p>              
                <img src="./img/big-dot.png" alt="" className="hidden lg:block absolute z-10 -top-14 -right-1 opacity-70"/>
            </div>
        </div>
    )

}

export default HeroDot;