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
    <div className='mt-40 md:mt-5'>
      <div className="flex flex-col items-center mt-10 gap-5">
        <div className="flex items-center flex-col text-center px-4">
          <img src="/icons/lighthouse.png" alt="boat" className="w-20 md:w-24" />
          <h1 className="text-3xl md:text-5xl text-darkNavy mb-3 mt-3 md:mb-5">
            A CLASSIC AMERICAN BISTRO IN THE HEART OF THE HUDSON VALLEY
          </h1>
          <p ref={ref} className={`text-xl text-darkNavy font-alpina m-5 ${inView ? 'scale-in-top' : ''}`}>
            Nestled in the heart of Beacon, NY, Lyonshare is more than just a restaurant — 
            it's a tribute to the enduring spirit of the Hudson Valley. Our name pays homage 
            to the legendary John Lyon, known to locals as "John Lyon, the Boatman." A 
            colorful figure in Hudson Valley history, Lyon was renowned for his resilience, 
            rugged charm, and deep connection to the Hudson River.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodandDrinks;
