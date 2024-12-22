import React from "react";
import Button from "./Button";
function ContactForm(){
    return(
        <div className="flex flex-col md:flex-row bg-[#EBFAF4] py-6 px-5 md:py-12 lg:px-52 justify-between ">
            <div className="">
                <h1 className="text-3xl font-bold mb-2 text-center md:text-left">Do you have a next level-idea?</h1>
                <p className="text-gray-500 text-center md:text-left">Reach out and we can create magic together</p>
            </div>
            <Button bgColor="bg-green-500" color="text-white" text="WORK WITH US"></Button>
        </div>
    )
}

export default ContactForm;