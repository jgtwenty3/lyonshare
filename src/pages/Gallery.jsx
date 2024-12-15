import React, { useState } from 'react';
import FoodGallery from '../components/FoodGallery';
import DrinkGallery from '../components/DrinkGallery';
import SpaceGallery from '../components/SpaceGallery';
import Button from '../components/Button';
import { useInView } from 'react-intersection-observer';


const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState('Food');
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  

  return (
    <div>
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
      <div className="p-10 md:p-20">
        <div className="flex justify-center gap-4">
          <Button title="THE FOOD" onClick={() => setSelectedGallery('Food')} />
          <Button title="THE DRINKS" onClick={() => setSelectedGallery('Drink')} />
          <Button title="THE SPACE" onClick={() => setSelectedGallery('Space')} />
        </div>
      </div>
      <div>
        {selectedGallery === 'Food' && <FoodGallery />}
        {selectedGallery === 'Drink' && <DrinkGallery />}
        {selectedGallery === 'Space' && <SpaceGallery />}
      </div>
    </div>
  );
}

export default Gallery;
