
import React from "react";
import { useState } from 'react';
type Post ={
    id_post: number;
    titolo:string;
    descrizione:string;
    data:string;
    id_autore:number;
    titolocat:string;
}



type Props = {
  handleSearch: (searchTerm: string) => Promise<Post[]>; 
};

function NavigationBlog(props: Props) {
  const [searchTerm, setSearchTerm] = useState(''); // Stato per il termine di ricerca

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene il comportamento predefinito del form
    props.handleSearch(searchTerm); // Passa il valore dello stato al gestore di ricerca
    console.log(searchTerm);
  };

  return (
    <div className="mb-4">
      <div>
        <img src="./img/bg-blog.png" alt="" className="w-full object-cover h-80 xl:h-96" />
      </div>
      <div className="flex p-6 justify-center space-x-7 shadow-xl flex-wrap content-center">
        <a href="" className="p-4 text-green-500 font-bold border-b-2 border-green-500">
          Home
        </a>
        <form method="POST" onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            className="shadow-xl bg-slate-100 h-9 p-2"
            placeholder="Cerca..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Aggiorna lo stato al cambiamento dell'input
          />
          <button
            type="submit" // Usa il submit per gestire il form
            className="size-9 bg-slate-900 rounded-lg flex items-center justify-center shadow-xl"
          >
            <img src="./img/mag-lens.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default NavigationBlog;
