import React from 'react';
import { imageList } from '../lib/data';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="pb-24">
      {/* Hero Image */}
      <div className="relative w-screen h-[600px] md:h-[800px]">
        <img
          src="/images/painting.webp"
          alt="boat"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover border-2 border-darkNavy"
        />
      </div>

      {/* Gallery Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-5 mr-5 md:mr-9 mt-5"
      >
        {imageList.slice(0, 12).map((src, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={src}
              alt={`Gallery item ${index + 1}`}
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
