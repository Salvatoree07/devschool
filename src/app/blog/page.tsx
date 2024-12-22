import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationClient from "../components/NavigationClient";
import { supabase } from "../clientSupabase";

type Post={
    id_post: number;
    titolo:string;
    descrizione:string;
    data:string;
    id_autore:number;
    titolocat:string;
}

async function recuperoPost(): Promise<Post[]> {
    const { data, error } = await supabase
    .from('post')
    .select('*')
    .eq('titolocat', 'Mobile App World')    // Correct

    if(error){
        console.log("si è verificato un errore");
    } else {
        //console.log('Dati: ', data);
    }

    return data ?? [];
}

 async function Blog(){
    const dati = await recuperoPost();
    return (
        <div>
            <Header />
            <NavigationClient data={dati}/> 
            <Footer />
        </div>
    )
}
export default Blog;