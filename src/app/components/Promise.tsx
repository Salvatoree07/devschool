import React from "react";

function item(logo:string, title:string, testo:string){
    return(
        <div className="flex w-64 mx-12 my-8">
            <img src={logo} alt="imagine logo" className="w-8 h-8" />
            <div className="flex flex-col ml-4">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="leading-7 mt-4">{testo}</p>
            </div>
        </div>
    )
}
function Promise(){
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-3xl mb-3">Our Promise</h1>
                <p>As part of our high quality service, we'd like to offer something extra too.</p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
                {item("/img/prova.png", "Top Code Quality", "What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.")}     
                {item("/img/prova.png", "Top Code Quality", "What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.")}     
                {item("/img/prova.png", "Top Code Quality", "What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.")}     
                {item("/img/prova.png", "Top Code Quality", "What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.")}     
                {item("/img/prova.png", "Top Code Quality", "What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.")}     
                {item("/img/prova.png", "Top Code Quality", "What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.")}     
            </div>
        </div>
    )
}

export default Promise;