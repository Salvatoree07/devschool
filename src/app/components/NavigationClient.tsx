'use client';
import React from "react";
import ContactForm from "./CTAContact";
import BlogCardBig from "./BlogCardBig";
import BlogCardSmall from "./BlogCardSmall";
import NavigationBlog from "./NavigationBlog";
// import { useState } from "react";
import { supabase } from "../clientSupabase";
type Props = {
  id_post: number;
  titolo: string;
  descrizione: string;
  data: string;
  id_autore: number;
  titolocat: string;
};

type Propriety = {
  data: Props[];
};

function NavigationClient(props: Propriety) {
  // const [searchResults, setSearchResults] = useState<Props[]>([]);
  // const [searchTerm, setSearchTerm] = useState(''); // Stato per il termine di ricerca

  const searching = async (searchTerm: string): Promise<Props[]> => {
    try {
        console.log("Ricerca: "+searchTerm);
      // Supponiamo di fare una chiamata asincrona per ottenere i dati (ad esempio da un'API o database)
      const { data, error } = await supabase
        .from('post')
        .select('*')
        .ilike('titolo', `%${searchTerm}%`); // Esegui la ricerca per titolo
        

      if (error) {
        console.error('Errore nella ricerca:', error.message);
        return []; // Restituisci un array vuoto in caso di errore
      }
      console.log(data);
      return data as Props[]; // Restituisci i risultati come array di Post
      
    } catch (err) {
      console.error('Errore durante la ricerca:', err);
      return []; // Restituisci un array vuoto in caso di errore
    }
  };


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault(); // Previene il comportamento predefinito del form
  //   const prova= searching(searchTerm); // Chiama la funzione di ricerca con il termine
  // };

  // const displayedPosts = searchResults.length > 0 ? searchResults : props.data; // Mostra i risultati o i dati originali

  return (
    <div>
      <NavigationBlog handleSearch={searching} />
      

      <div className="flex flex-col lg:flex-row lg:space-x-24 justify-center">
        <div className="flex flex-row flex-wrap justify-center ">
          {props.data.map((post: Props) => (
            <BlogCardBig
              key={post.id_post}
              title={post.titolo}
              description={post.descrizione.substring(0, 127) + '...'}
            />
          ))}
        </div>
        <div className="flex flex-col lg:pr-7">
          <div className="relative flex justify-center ">
            <div className="h-[5px] w-full absolute border-b-4 border-green-500 top-2 z-10 rounded-md"></div>
            <h6 className="z-20 relative bg-white px-5">Mobile Development</h6>
          </div>
          <div className="flex flex-row lg:flex-col justify-center">
            <BlogCardSmall />
            <BlogCardSmall />
          </div>
        </div>
      </div>
      <div className="bg-black md:p-20">
                <div className="flex flex-col space-y-6 md:flex-row md:justify-between relative items-center">
                    <p  className="text-white text-xl relative z-30 bg-black md:pr-7">Web Development</p>
                    <div>
                        <span className="hidden md:inline text-black text-3xl relative -top-[10px] z-30">__</span><button className="w-fit px-7 py-2 bg-green-500 text-white rounded-xl text-xl relative z-30">See more articles</button>
                    </div>
                    <div className="hidden md:block h-[5px] w-full absolute border-b-2 border-green-500 top-5 z-10 rounded-md"></div>

                </div>
                <div className="flex flex-col items-center md:flex-row md:space-x-6 md:justify-center flex-wrap">
                        <BlogCardBig 
                            title="Building Scalable Mobile Applications"
                            description="Techniques and tools for creating mobile apps that scale with user demand."
                        />
                        <BlogCardBig 
                            title="Building Scalable Mobile Applications"
                            description="Techniques and tools for creating mobile apps that scale with user demand."
                        />
                        <BlogCardBig 
                            title="Building Scalable Mobile Applications"
                            description="Techniques and tools for creating mobile apps that scale with user demand."
                        />
                        <BlogCardBig 
                            title="Building Scalable Mobile Applications"
                            description="Techniques and tools for creating mobile apps that scale with user demand."
                        />

                        
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:space-x-10 py-24 items-center">
                <div  className="relative">
                    <div className="h-[5px] w-full absolute border-b-4 border-green-500 top-[11px] rounded-md"></div>
                    <h6 className="z-20 relative bg-white px-5 w-fit font-bold">
                        Dgital marketing
                    </h6>
                    <div className="flex flex-col md:flex-row justify-center items-center lg:block">
                        <BlogCardSmall/>
                        <BlogCardSmall/>
                    </div>
                    
                </div>
                <img src="./img/blog-marketing-img.png" alt="" className="p-6 md:max-w-[650px] xl:max-w-[800px]"/>
            </div>
            <ContactForm/>
    </div>
  );
}

export default NavigationClient;