import React from "react";
import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import Identity from "../../app/components/Identity";
import Technologies from "../../app/components/Technologies";
import Features from "../../app/components/Features";
import Members from "../../app/components/Members";
import ContactForm from "../components/CTAContact";
function About (){
    return(
        <div>
            <Header />
            <Identity />
            <Technologies />
            <Features />
            <Members />
            <ContactForm />
            <Footer />
            
        </div>
    )
};
export default About;