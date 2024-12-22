import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import HeroContact from "../components/HeroContact";
function Contact(){
    return (
        <div>
            <Header />
            <HeroContact />
            <FormContact />
            <Footer />
        </div>
    )
}

export default Contact;