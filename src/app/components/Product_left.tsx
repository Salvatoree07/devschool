import React from "react";

function Product_left(){
    return(
        <div className="flex flex-col p-20 lg:flex-row xl:space-x-40 items-center justify-center">
            <div className="max-w-[700px]">
                <p className="text-2xl text-gray-600 mb-6">01</p>
                <h2 className="text-4xl mb-6 font-bold text-blue-950">Pacioli</h2>
                <p className="text-md mb-6 leading-9 text-[#262626]">Pacioli is the flagship product at petrong software solutions, a tailored digital 
                    lending tools that helps microfinance institutions to efficiently and quickly 
                    onboard customers and to account reconciliation with financial inclution
                    as the motivation.
                    Pacioli improves female customers comfort with the service by specifically
                    design for unique constraint.
                </p>
                <div className="flex justify-center lg:block">
                    <button className="mb-6 bg-green-500 text-white p-3 rounded-lg font-semibold">Learn More</button>
                </div>
            </div>
            <div>
                <img src="./img/product-img.png" alt="" className="" />
            </div>
        </div>
    )
}

export default Product_left;