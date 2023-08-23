import React from 'react'
import Popup from 'reactjs-popup';

export default function PokemonList({ singlePokemon, pokemon }) {
    function toUpper(type) {
        return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    }

    return (
        <div className='flex justify-center mt-4 mb-6'>
            <ul>
                {pokemon.map((p, i) => {
                    return (
                        <div className='flex flex-row justify-between align-middle py-1 border-gray-300 border-b-2 hover:cursor-pointer'>
                            <div className='flex flex-col justify-around mr-4'>
                                <li key={p.name} className='font-["Tektur"] font-semibold text-lg md:text-xl lg:text-2xl text-left'>
                                    {p.name} 
                                </li>
                                <Popup trigger={<button className='font-["Tektur"] text-lg md:text-xl lg:text-2xl text-center w-20 md:w-24 lg:w-28 border-2 border-gray-300 rounded hover:bg-red-500 hover:text-white hover:border-black hover:cursor-pointer'>Stats</button>} position="center" modal>
                                {close => (
                                <div className="bg-slate-100 border-2 border-black w-64 md:w-72 lg:w-80 font-['Tektur'] rounded-lg">
                                    <button className="hover:cursor-pointer block absolute top-[0px] pt-[2px] right-[0px] text-xl text-black" onClick={close}>
                                        &nbsp;&nbsp;&times;&nbsp;&nbsp;
                                    </button>
                                    <div className='flex flex-col justify-center pt-8 pb-4 font-["Tektur"]'>
                                        <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-semibold'>{p.name}</h1>
                                        <div className='flex justify-center'>
                                            <img alt={p.name} src={singlePokemon[i].sprites.other.home.front_default} className='w-24 md:w-28'/>
                                        </div>
                                        <div>
                                            {singlePokemon[i].types.length === 1 ? (
                                                <>
                                                <h2 className='pt-3 text-lg md:text-xl lg:text-2xl text-center font-semibold'>
                                                    Type
                                                </h2>
                                                <div className='flex justify-center text-md md:text-lg lg:text-xl text-center py-1'>
                                                    <p>{toUpper(singlePokemon[i].types[0].type.name)}</p>
                                                </div>
                                                </>
                                            ) : (
                                                <>
                                                <h2 className='pt-3 text-lg md:text-xl lg:text-2xl text-center font-semibold'>
                                                Types
                                                </h2>
                                                <div className='flex justify-center text-md md:text-lg lg:text-xl text-center py-1'>
                                                    <p>{toUpper(singlePokemon[i].types[0].type.name)}</p>
                                                    <p className='px-2'>&#8226;</p>
                                                    <p>{toUpper(singlePokemon[i].types[1].type.name)}</p>
                                                </div>
                                                </>
                                            )}
                                        </div>
                                        <h3 className='text-lg text-center font-semibold'>Base Stats</h3>
                                        <div className='flex flex-col justify-center text-md md:text-lg lg:text-xl text-center py-1'>
                                            <p className='pb-[0.1rem]'>HP&nbsp;: {singlePokemon[i].stats[0].base_stat}</p>
                                            <p className='py-[0.1rem]'>Attack&nbsp;: {singlePokemon[i].stats[1].base_stat}</p>
                                            <p className='py-[0.1rem]'>Defense&nbsp;: {singlePokemon[i].stats[2].base_stat}</p>
                                            <p className='py-[0.1rem]'>Sp.&nbsp;Atk&nbsp;: {singlePokemon[i].stats[3].base_stat}</p>
                                            <p className='py-[0.1rem]'>Sp.&nbsp;Def&nbsp;: {singlePokemon[i].stats[4].base_stat}</p>
                                            <p className='py-[0.1rem]'>Speed&nbsp;: {singlePokemon[i].stats[5].base_stat}</p>
                                            <p className='py-[0.1rem]'>Height&nbsp;: {singlePokemon[i].height / 10} m</p>
                                            <p className='pt-[0.1rem]'>Weight&nbsp;: {singlePokemon[i].weight / 10} kg</p>
                                        </div>
                                    </div>
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
