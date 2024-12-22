import React from "react";

function FormContact(){
    return (
        <div className="flex flex-col md:flex-row items-center justify-center  md:space-x-2 lg:space-x-40  mt-40">
            <div className="p-8">
                <span className="text-green-500 text-3xl">___</span>
                <span className="text-lg  ml-2 p-3 font-bold ">WORK WITH US</span>
                <h1 className="max-w-96 font-bold text-4xl my-10">Let build something
                awesome together</h1>
                <form action="POST" className="flex flex-col  space-y-2 xl:w-[700px] ">
                    <label htmlFor="" className="px-5 text-blue-950 font-bold">Name</label>
                    <input type="text" placeholder="Inserisci il tuo nome" className="bg-[#EBFAF4] rounded-lg h-16 p-5"/>
                    <label htmlFor="" className="pt-6 px-5 text-blue-950 font-bold">Email Address</label>
                    <input type="text" placeholder="Inserisci il tuo indirizzo email" className="bg-[#EBFAF4] rounded-lg h-16 p-5"/>
                    <label htmlFor="" className="pt-6 px-5 text-blue-950 font-bold">Your Messagge</label>
                    <textarea name="" id="" placeholder="Inserisci il tuo messaggio" className="bg-[#EBFAF4] rounded-lg h-16 p-5 mb-7"></textarea>
                    <input type="submit" className="bg-green-500 text-white font-bold h-16 p-5 rounded-lg" value={"Sumbit"}/>
                </form>

            </div>
            <div className="relative"> 
                <div className="flex space-x-10 mb-10 relative">
                    <div className="size-12 shadow-sm shadow-slate-400 rounded-md flex justify-center items-center relative top-4">
                        <img src="/img/factory-icon.png" alt="" className="size-5 "/>
                    </div>
                    <div className="">
                        <h3 className=" text-3xl mb-2 text-blue-950 ">Pay us a visit</h3>
                        <p className="mt-4">471, Alagbado off ijaye ojokoro</p>
                        <p className="mt-4">Inner Street Long Road,</p>
                        <p className="mt-4">Lagos Nigeria</p>
                    </div>
                </div>
                <div className="flex space-x-10 mb-10 relative mt-40">
                    <div className="size-12 shadow-sm shadow-slate-400 rounded-md flex justify-center items-center relative top-4">
                        <img src="/img/cell-icon.png" alt="" className="size-5 "/>
                    </div>
                    <div className="">
                        <h3 className=" text-3xl mb-2 text-blue-950 ">Or drop us a line</h3>
                        <p className="mt-4">partnerships@petrongsolutions.com
                        </p>
                        <p className="mt-4">+234 810 7595 941</p>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default FormContact;