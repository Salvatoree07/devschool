'use client';
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Header from '../app/components/Header';
import HeroSection from "../app/components/HeroSection";
import Services from "../app/components/Services";
import Partnership from "../app/components/Partnership";
import Promise from "../app/components/Promise";
import ContactForm from "./components/CTAContact";
import Footer from "../app/components/Footer";
import "animate.css";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => { //la useEffect viene eseguita una sola volta grazie alla presenza del secondo parametro [] e seve per effettuare operazione ad esempio: inizializzazioni di variabili, inizializzazioni di oggetti, etc.
        const observer = new IntersectionObserver(
        ([entry]) => { //entry contiene informazioni relative al singolo elemnto del dom
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        },
        { threshold: 0.1 } // Attiva quando il 10% dell'elemento è visibile
    );

    if (ref.current) { //queste serve per vedere se l'elemnto ref è davvero osservato dall'observer
      observer.observe(ref.current);
    }

    return () => { //questo invece server per togliere l'attensione dall'elemento del DOM che ormai non è più visibile
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
        <div className="animate__animated animate__fadeIn">
          <Header/>
          <HeroSection/>
          <Services />
          <Partnership />
          {/* <Testimonials /> */}
          <Partnership />
        
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Stato iniziale
            animate={isVisible ? { opacity: 1, y: 0 } : {}}  // Stato finale
            transition={{ duration: 0.5 }}  // Durata dell'animazione
          >
            <Promise/>
          </motion.div>
          <ContactForm />
          <Footer />
        </div>
  );
}


export default Home;
