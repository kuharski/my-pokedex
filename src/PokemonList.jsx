import React from 'react'
import Popup from 'reactjs-popup';

export default function PokemonList({ singlePokemon, pokemon, loading }) {
    return (
        <div className='flex justify-center mt-4 mb-6'>
            <ul>
                {pokemon.map((p, i) => {
                    return (
                        <div className='flex flex-row justify-between align-middle ml-6 py-1 border-gray-300 border-b-2 hover:cursor-pointer'>
                            <div className='flex flex-col justify-around mr-4'>
                                <li key={p.name} className='font-["Tektur"] font-semibold text-lg md:text-xl lg:text-2xl text-center'>
                                    {p.name} 
                                </li>
                                <Popup trigger={<button className='font-["Tektur"] text-lg md:text-xl lg:text-2xl text-center w-16 border-2 border-gray-300 rounded hover:bg-red-500 hover:text-white hover:border-black hover:cursor-pointer'>Stats</button>} modal>
                                {close => (
                                <div className="">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                </div>)}
                                </Popup>
                                
                            </div>
                            <img alt={p.name} src={singlePokemon[i].sprites.other.home.front_default} className='w-24 md:w-28'/>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}
