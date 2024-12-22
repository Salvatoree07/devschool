import React from "react";
import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import Identity from "../../app/components/Identity";
import MobileApp  from "../../app/components/MobileApp";
import CTAContact from "../components/CTAContact";
function Portfolio (){
    return(
        <div>
            <Header/>
            <div className="relative">
                <img src="./img/decoration.png" alt="decorazione" className="hidden md:block absolute right-28 -bottom-10 " />
                <Identity/>
            </div>
            <MobileApp />
            <CTAContact />
            <Footer/>
        </div>
    )
}

export default Portfolio;