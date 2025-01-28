import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

const FoodandDrinks = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  console.log('inView:', inView); // Add console log to check inView value

  return (
    <div className='mt-24 md:mt-5'>
      <div className="flex flex-col items-center mt-10 gap-5">
        <div className="flex items-center flex-col text-center px-4">
          <img src="/icons/lighthouse.png" alt="boat" className="w-20 md:w-24" />
          <h1 className="text-3xl md:text-5xl text-darkNavy mb-3 mt-3 md:mb-5">
            AN ELEVATED AMERICAN BISTRO NESTLED IN THE HEART OF THE HUDSON VALLEY
          </h1>
          <p ref={ref} className={`md:text-2xl text-lg text-darkNavy font-alpina m-5 ${inView ? 'scale-in-top' : ' '} md:w-2/3` }>
          Celebrating the ethos of
          classic public houses where meals and community merge to create memories.
          </p>
        </div>
        <a href="https://resy.com/cities/beacon-ny-ny/venues/lyonshare?seats=2&date=2024-12-11">
              <Button
                id="product-button"
                title="RESERVATIONS"
                containerClass="flex items-center border-2 border-darkNavy justify-center gap-2 px-4 py-2 text-lg md:text-xl hover:scale-105"
              />
            </a>
      </div>
    </div>
  );
};

export default FoodandDrinks;
