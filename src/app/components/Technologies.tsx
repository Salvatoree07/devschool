import React from "react";

function Technologies(){
    return(
        <div className="p-4 md:p-44">
            <span className="text-green-500 text-2xl">___</span>
            <span className="text-xl  ml-2 p-3 mb-4 font-bold">OUR SERVICES</span>
            <h2 className="p-4 md:px-0 md:pt-10 text-4xl leading-10 mb-3 text-blue-950 xl:pr-[30rem] ">
                Methodologies & 
                Technology We Use.
            </h2>
            <p className="p-4 md:p-0 leading-10 text-xl xl:pr-[30rem] ">
            We  build tour product from scatch with top most frontend and
            backend framework. We also focus on native end user
                experinces, providing full performance on both iOS
                and android devices
            </p>
            <div className="flex justify-center md:justify-end mt-9">
                <div className=" grid grid-cols-2 grid-rows-2 gap-3 xl:mr-52">
                    <div className="size-36 md:size-64  flex justify-center items-center rounded-xl bg-slate-200 ">Node.js</div>
                    <div className="size-36 md:size-64  flex justify-center items-center rounded-xl bg-slate-200">Vue.js</div>
                    <div className="size-36 md:size-64  flex justify-center items-center rounded-xl bg-slate-200">Laravel</div>
                    <div className="size-36 md:size-64  flex justify-center items-center rounded-xl bg-slate-200">React.js</div>
                </div>
            </div>
            
        </div>
    )
}

export default Technologies;