import React from "react";

function Product_right(){
    return (
        <div className="flex flex-col p-20 lg:flex-row xl:space-x-40 items-center justify-center">
            
            <div>
                <img src="./img/product-img-right.png" alt="" className="" />
            </div>
            <div className="max-w-[700px]">
                <p className="text-2xl text-gray-600 mb-6">02</p>
                <h2 className="text-4xl mb-6 font-bold text-blue-950">Kollegio</h2>
                <p className="text-md mb-6 leading-9 text-[#262626]">The software is a highly flexible and robust Learning Management System (LMS) which will fit in well for any kind of training, academic or professional. It so dynamic that an organization can use the software for an academic, professional, vocational, and more purposes concurrently. As it has been elaborately spelt out in this list, the built-in features enable the organization to set up live video classrooms, computer based test system, video lesson uploads, ebooks in form of PDFs, and more. There are also other admin features like bulk email to users, audit trail, permissions and access control, etc. The software is heavily loaded, and it is rare to find its match in the Nigerian Edtech ecosystem, lots of efforts, resources and energy have also been put in to ensure its realization, prospects cannot wait to enjoy from the profit that the software promises.
                </p>
                <div className="flex justify-center lg:block">
                    <button className="mb-6 bg-green-500 text-white p-3 rounded-lg font-semibold">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Product_right;