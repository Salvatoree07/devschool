import React from "react";

function Testimonials(){
    return (
        <div className="container mx-auto flex mb-20">
            <div className="basis-1/2 p-10">
                <span className="border-b-emerald-800 border-b-2 text-white">_____</span> <span className="font-bold text-xl">TESTIMONIALS</span>
                <p className="font-bold mt-6">See how our clients feel about us</p>
            </div>
            <div className="flex basis-1/2 items-center">
                {/* background img */}
                <div className="foto px-10 pb-16">
                    <img src="/img/photo-face.png" alt="" className="profiloImg" />
                    <p className="leading-8 mt-4 mb-7">Working with the PETRONG team has been a huge success! They re
                    good people who care deeply about our business!</p>
                    <p className="font-bold">John Doe</p>
                    <div className="flex justify-between">
                        <p>CEO</p>
                        <p className="font-bold">Leonard Technologies</p>
                    </div>
                </div>
                <div className="flex flex-col p-7 space-y-2">
                    <img src="/img/button_1.png" alt="" className="style-button"/>
                    <img src="/img/button_2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;