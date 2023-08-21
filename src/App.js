import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=6&offset=0');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  const [pokemonPic, setPokemonPic] = useState([]);

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
            
            p.name = formattedName;

            return p;
        });
    }

    async function getPictureData(results) {
        // i want an array of url's 
        let ps = [];
        setLoading(true);
        for(let p of results) {
            let picUrl = await axios.get(p.url);
            ps.push(picUrl.data.sprites.front_default);
        }
        setLoading(false);
        return setPokemonPic(ps);
    }

    useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
        setLoading(false);
        getPictureData(res.data.results);
        
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

  if(loading) {
    return (
        <div className='flex flex-col justify-center bg-slate-100 h-screen'>
            <h1 className='mt-14 text-center font-["Tektur"] font-bold text-5xl md:text-6xl lg:text-7xl'>My Pok&#233;dex</h1>
            <div className='flex flex-col justify-center align-middle h-[43.5rem] md:h-[48.5rem] w-full bg-slate-100'>
                <div className="flex justify-center">
                    <img alt="loading" src={process.env.PUBLIC_URL + '/pokeball.png'} className="w-16 h-16 animate-spin" />
                </div>
            </div>
        </div>
    );
  } else {
    return (
        <div className='flex flex-col justify-center bg-slate-100 min-h-screen'>
            <h1 className='text-center font-["Tektur"] font-bold text-5xl md:text-6xl lg:text-7xl'>My Pok&#233;dex</h1>
            <PokemonList singlePokemon={pokemonPic} pokemon={pokemon} loading={loading} />
            <Pagination 
            goToNextPage={nextPageUrl ? goToNextPage : null}
            goToPrevPage={prevPageUrl ? goToPrevPage : null}
            />
        </div>
      );
  }

}

export default App;
