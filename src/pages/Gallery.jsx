import React from 'react';
import { imageList } from '../lib/data'; // Make sure the path to your data file is correct
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="pb-24">
      <div className="relative w-screen h-[600px] md:h-[800px]">
        <img
          src="/images/painting.png"
          alt="boat"
          className="w-full h-full object-cover border-2 border-darkNavy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={ref} className={`bg-white text-darkNavy border-2 border-darkNavy text-4xl md:text-6xl font-bebas font-bold px-6 py-2 shadow-lg shadow-black ${inView ? 'scale-in-hor-left' : ''}`}>
            GALLERY
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-5 mr-5 md:mr-9 mt-5">
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
}

export default Gallery;
