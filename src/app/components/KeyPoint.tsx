import React from "react";

function KeyPoint(){
    return(
        <div className="">
            <div className=" p-10 md:p-20 bg-[#EBFAF4] flex flex-col justify-center items-center relative">
                <img src="./img/line-twisted.png" alt="" className="hidden md:block absolute opacity-50 top-1"/>
                <h1 className="text-3xl font-bold mb-4 text-center">Dedicated product for you</h1>
                <p className="max-w-[700px] leading-10 text-center">Our product is craft out from looking at the problem people are facing each day and 
                    providing a solution to it, from the down of making a survey and turning it into a useful
                    products based on what we capture on people reaction and what they fill out</p>
                <img src="./img/decoration.png" alt="" className="hidden md:block absolute object-cover left-10 -bottom-16" />
            </div>

            <div className="p-20 text-center flex justify-center">
                <p className="text-2xl font-bold max-w-[300px]">Why you should choose 
                our product</p>
            </div>
        </div>
    )
}

export default KeyPoint;