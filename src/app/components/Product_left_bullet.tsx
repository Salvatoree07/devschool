import React from "react";

function Product_left_bullet(){
    return(
        <div className="flex flex-col p-20 lg:flex-row xl:space-x-40 items-center justify-center">
            <div className="max-w-[700px]">
                <p className="text-2xl text-gray-600 mb-6">01</p>
                <h2 className="text-4xl mb-6 font-bold text-blue-950">Digital Product Design.</h2>
                <p className="text-md  leading-9 text-[#262626]">The best software has both a strong back-end and a good front-end. We have got the tools and expertise to assist you in creating an intuitive and engaging user experience that your customers will love and your rivals will envy. Our UX/UI Design. Services include
                </p>
                <ul className="list-disc marker:text-green-500 marker:text-3xl relative left-6">
                        <li>Design Workshops</li>
                        <li>UX & UI Consulting</li>
                        <li>Creative Direction</li>
                        <li>Prototyping</li>
                        <li>Usability Testing</li>
                    </ul>
                <div className="flex justify-center lg:block">
                    <button className="mb-6 mt-6 bg-green-500 text-white p-3 rounded-lg font-semibold">Learn More</button>
                </div>
            </div>
            <div>
                <img src="./img/product-bullet-img.png" alt="" className="" />
            </div>
        </div>  

    )
}

export default Product_left_bullet;