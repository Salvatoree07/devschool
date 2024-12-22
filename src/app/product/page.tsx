import React from "react";
import Header from "../../app/components/Header";
import KeyPoint from "../../app/components/KeyPoint";
import Footer from "../../app/components/Footer";
import Product_left from "../components/Product_left";
import Product_right from "../components/Product_right";
import CareerContact from "../components/CareerContact";
import CTAContact from "../components/CTAContact";
function page(){
    return (
        <div className="">
            <Header />
            <KeyPoint/>
            <Product_left/>
            <Product_right/>
            <Product_left/>
            <CareerContact/>
            <CTAContact />
            <Footer />

        </div>
    );
}

export default page;