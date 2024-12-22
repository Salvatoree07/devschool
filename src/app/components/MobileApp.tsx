import React from "react";

function MobileApp(){
    return (
        <div className="py-8 px-5 md:py-20 md:px-32  bg-black">
            <h2 className="text-white text-3xl font-bold mb-3 ">Mobile & Web Applications</h2>
            <p className="text-white text-lg max-w-[900px]">We help create solutions that optimize processes, improve accessibility to data, and increase successful outcomes by providing the 
            necessary insights and tools to change physician and patient behavior.</p>
            <div className="mt-7 px-0 flex flex-col justify-center items-center space-y-5">
                <img src="./img/mock-app-1.png" alt="" className=" min-h-96 object-cover rounded-3xl" />
                <img src="./img/mock-up (1).png" alt="" className=" min-h-96 object-cover rounded-3xl" />
                <img src="./img/mock-up (2).png" alt="" className=" min-h-96 object-cover rounded-3xl" />
                <img src="./img/mock-up (3).png" alt="" className=" min-h-96 object-cover rounded-3xl" />
                <img src="./img/mock-up (4).png" alt="" className=" min-h-96 object-cover rounded-3xl" />
                <img src="./img/mock-up (5).png" alt="" className=" min-h-96 object-cover rounded-3xl" />
            </div>            
        </div>
    )
}

export default MobileApp;