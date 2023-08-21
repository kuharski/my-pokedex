import React from 'react'


export default function PokemonList({ pokemon, loading }) {
    
    if(loading) {
        return (
            <div className='flex flex-col justify-center align-middle h-[43.5rem] md:h-[48.5rem] w-full'>
                <div className="flex justify-center">
                    <img alt="loading" src={process.env.PUBLIC_URL + '/pokeball.png'} className="w-16 h-16 animate-spin" />
                </div>
            </div>
        );
    } else {
        return (
            <div className='flex justify-center mt-10 mb-4'>
                <ul>
                    {pokemon.map((name) => (
                        <li key={name} className='text-base md:text-lg lg:text-xl text-center py-1'>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
