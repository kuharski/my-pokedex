import React from 'react'


export default function PokemonList({ singlePokemon, pokemon, loading }) {
        return (
            <div className='flex justify-center mt-4 mb-6'>
                <ul>
                    {pokemon.map((p, i) => {
                        return (
                            <div className='flex flex-row justify-between align-middle ml-6'>

                                    <div className='flex flex-col justify-center mr-4'>
                                        <li key={p.name} className='font-["Tektur"] font-semibold text-lg md:text-xl lg:text-2xl text-center'>
                                            {p.name} 
                                        </li>
                                    </div>
                                    <img alt={p.name} src={singlePokemon[i]} className='w-24 md:w-28'/>

                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
//}
