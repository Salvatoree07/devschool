
import React from "react";

import Button from "./Button";



function HeroSection(){
    

    return(
        
            <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16 xl:px-72  bg-black xl:space-x-2 ">
                <div className="max-w-lg">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-7 text-white">Get the next level developments.</h1>
                    <p className="text-white mb-6 text-sm lg:text-md">
                    Every line of code we deliver is carefully crafted by our in-house team of
                    professional developers. While constantly looking for new horizons,
                    challenges, and opportunities in the web development, we
                    have focused our attention on these core areas:
                    </p>
                    <div className="space-x-10">
                        <Button bgColor="bg-green-500" color="text-white" text="Get a Quote"/>
                        <Button bgColor="bg-white" color="text-black" text="Schedule a Call"/>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                <img src="/img/intro-img.png" alt="Developers at work" className="rounded-lg" />
                </div>
            </div>

        
    )
}

export default HeroSection;