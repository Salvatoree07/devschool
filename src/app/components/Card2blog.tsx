import React from "react";
import Author2 from "./Author2";
function Card2blog(){
    return (
        <div className="md:w-80 lg:w-96  rounded-3xl flex flex-col justify-center space-y-5 p-4">
            <img src="./img/cover2-article-img.png" alt="" />
            <a href="" className="underline text-blue-900">Design</a>
            <p className="font-bold text-2xl leading-9 text-[#000D2F]">Designing an Effective Splash
Screen: Best Practices, Tips and
Examples</p>
            <div className="">
                <Author2/>
            </div>
        </div>
    )
}

export default Card2blog;