import React from "react";
import Button from "./Button";
function Partnership (){
    return (
        <div className="bg-gray-600 flex flex-col lg:flex-row justify-around  lg:px-14 lg:py-16 items-center bg-[url('/img/img-back.png')]">
            <div className="lg:w-1/2 flex justify-center items-center p-7 "> 
                <img src="/img/patner-img.jpg" alt="" className=""/>
            </div>
            <div className="lg:w-1/2 lg:pl-7 p-7 ">
                <h1 className="font-bold text-4xl mb-5">Partnership for agencies</h1>
                <p className="line leading-10 mb-10">
                    A reliable coding partner that delivers solutions to your business challenges and
                    stays by your side in the long term. Having the whole spectrum of web
                    development expertise, we are here to take care of your projects while
                    making it possible for you to focus on growing your own business.
                </p>
                <div className="max-sm:flex max-sm:justify-center">
                    <Button text="Partnership Details" bgColor="bg-green-500" color="text-white"/>
                </div>
                
            </div>
        </div>
    )
}

export default Partnership;