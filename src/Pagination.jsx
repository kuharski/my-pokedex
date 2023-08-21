import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
    return (
    <div className='flex flex-row justify-center'>
        {goToPrevPage && <button onClick={goToPrevPage} className='mr-4 py-2 px-4 rounded-md bg-white border-2 border-black hover:bg-red-500 hover:text-white hover:cursor-pointer'>Previous</button>}
        {goToNextPage && <button onClick={goToNextPage} className='py-2 px-4 rounded-md bg-white border-2 border-black hover:bg-red-500 hover:text-white hover:cursor-pointer'>Next</button>}
    </div>
  );
}
