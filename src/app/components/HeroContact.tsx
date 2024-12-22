import React  from "react";

function HeroContact (){
    return (
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-20 p-16 items-center justify-center relative bg-[#EBFAF4]">
            <div className="relative">
                <img src="./img/contact-img.png" alt="" className="rounded-3xl relative z-0 md:z-20"/>
                
            </div>
            <img src="./img/line-twisted.png" alt="" className="hidden md:block absolute opacity-50  z-10"/>
            <div className="relative max-w-[700px]">
                <span className="text-green-500 text-3xl relative z-0 md:z-20">___</span>
                <span className="text-md  ml-2 p-3 font-bold relative z-0 md:z-20">DO YOU HAVE ANY QUESTION</span>
                <h1 className="text-4xl font-bold my-5">Contact Us</h1>
                <p className="leading-8">We are located in Nigeria and we operate internationally,  with clients from
                the US, UK, Canada, Australia, and many other countries.</p>             
                <img src="./img/big-dot.png" alt="" className="hidden lg:block absolute z-10 -top-14 -right-1 opacity-70"/>
            </div>
            <img src="./img/rectangle.png" alt="" className="absolute size-48 right-40 -bottom-32"/>
        </div>
    )
    
}

export default HeroContact;