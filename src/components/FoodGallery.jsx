import React from 'react';
import { imageList } from '../lib/data';

const FoodGallery = () => {
  return (
    <div className='mr-2 md:mr-3'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-5 mr-5 md:max-h-10">
        {imageList.slice(0, 9).map((src, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={src}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
