import React from 'react'
import { imageList } from '../lib/data'

const SpaceGallery = () => {
  return (
    <div className='mr-2 md:mr-3'>
      <h1 className='flex justify-center text-7xl mb-10'>THE SPACE</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        
        {imageList.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              src={src}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-500 ease-in-out bg-darkNavy px-3 py-3 border-4 border-barnishedBrass"
              loading="lazy"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              <p className="text-white font-bold text-lg">Gallery item {index + 1}</p>
            </div> */}
        </div>
      ))}
    </div>

    </div>
    
  )
}

export default SpaceGallery