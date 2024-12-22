import React from "react";

function Members(){
    return(
        <div className="p-4 md:p-44 bg-black">
            <span className="text-green-500 text-2xl">___</span>
            <span className="text-xl  ml-2 p-3 mb-4 font-bold text-white">OUR TEAM</span>
            <h2 className="p-4 md:px-0 md:pt-10 text-4xl leading-10 mb-3 text-white xl:pr-[30rem] ">
                    A melting pot for the 
                    best idea  
            </h2>
            <p className="p-4 md:p-0 leading-10 text-xl text-white">
                The team at petrong we are powering the growth
                of africal technologh ecosystem
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap mt-12 md:space-x-8 justify-center items-center">
                <div className=" size-64 bg-white rounded-lg flex flex-col justify-center items-center p-9 mb-8">
                    <img src="./img/team-profile.png" alt="" className=" mb-3" />
                    <h4 className="text-lg mb-2">Rasheed Ogunusi</h4>
                    <p className="text-gray-500">CTO</p>
                </div>
                <div className=" size-64 bg-white rounded-lg flex flex-col justify-center items-center p-9 mb-8">
                    <img src="./img/team-profile.png" alt="" className=" mb-3" />
                    <h4 className="text-lg mb-2">Rasheed Ogunusi</h4>
                    <p className="text-gray-500">CTO</p>
                </div>
                <div className=" size-64 bg-white rounded-lg flex flex-col justify-center items-center p-9 mb-8">
                    <img src="./img/team-profile.png" alt="" className=" mb-3" />
                    <h4 className="text-lg mb-2">Rasheed Ogunusi</h4>
                    <p className="text-gray-500">CTO</p>
                </div>
                <div className=" size-64 bg-white rounded-lg flex flex-col justify-center items-center p-9 mb-8">
                    <img src="./img/team-profile.png" alt="" className=" mb-3" />
                    <h4 className="text-lg mb-2">Rasheed Ogunusi</h4>
                    <p className="text-gray-500">CTO</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default Members; 