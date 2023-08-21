import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
    return (
    <div className='flex flex-row justify-center mb-8'>
        {goToPrevPage && <button onClick={goToPrevPage} className='font-["Tektur"] font-semibold mr-4 py-2 px-4 rounded-md bg-white border-2 border-black hover:bg-red-500 hover:text-white hover:cursor-pointer'>Previous Page</button>}
        {goToNextPage && <button onClick={goToNextPage} className='font-["Tektur"] font-semibold py-2 px-4 rounded-md bg-white border-2 border-black hover:bg-red-500 hover:text-white hover:cursor-pointer'>Next Page</button>}
    </div>
  );
}