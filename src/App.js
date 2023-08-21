import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

    function formatName(results) {
        return results.map((p) => {
            let formattedName = '';
            //seperate name by '-'
            const parts = p.name.split('-');

            //concatenate name and capitalize
            for(let part of parts) {
                if(formattedName === '') {
                    formattedName = formattedName + part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
                } else {
                    formattedName = formattedName + ' ' + part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
                }
            }
            
            p = formattedName;

            return p;
        });
    }

    useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
      setLoading(false)
      //stop at 1280
      setNextPageUrl(res.data.next === 'https://pokeapi.co/api/v2/pokemon?offset=1280&limit=1' ? null : res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(formatName(res.data.results));
    })

    return () => cancel;
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <div className='flex flex-col justify-center bg-slate-100'>
        <h1 className='mt-14 text-center font-semibold text-4xl md:text-5xl lg:text-6xl'>My Pok&#233;dex</h1>
        <PokemonList pokemon={pokemon} loading={loading} />
        <Pagination 
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
        />
    </div>
  );
}

export default App;
