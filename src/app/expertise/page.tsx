import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product_left from "../components/Product_left";
import Product_right from "../components/Product_right";
import CareerContact from "../components/CareerContact";
import CTAContact from "../components/CTAContact";
import HeroDot from "../components/HeroDot";
import Product_left_bullet from "../components/Product_left_bullet";
function Expertise(){
    return (
        <div>
            <Header />
            <HeroDot />
            <Product_left_bullet />
            <Product_right />
            <Product_left />
            <CareerContact />
            <CTAContact />
            <Footer />
        </div>
    )
}

export default Expertise;