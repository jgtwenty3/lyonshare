import React from 'react';
import { imageList } from '../lib/data';

const FoodGallery = () => {
  return (
    <div className='mr-2 md:mr-3'>
      <h1 className='flex justify-center text-7xl mb-10'>THE FOOD</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {imageList.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              src={src}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-500 ease-in-out bg-darkNavy px-3 py-3 border-4 border-barnishedBrass"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
