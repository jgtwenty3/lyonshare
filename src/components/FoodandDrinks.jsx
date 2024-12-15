import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

const FoodandDrinks = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div className='mt-40 md:mt-5'>
      <div  className="relative w-full h-[600px] border-darkNavy border-2 ">
        <img
          src="/images/food/burgerSoupOverhead.webp" 
          alt="menu"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 flex items-center justify-center p-5 ${inView ? 'bounce-in-top' : ''}`}>
          <a href='/menu'>
            <div ref={ref} className="bg-white text-darkNavy border-2 border-darkNavy text-4xl font-montefiore font-bold px-6 py-2 shadow-lg shadow-black hover:scale-110">
              <h1>MENU</h1>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 gap-5">
        <div className="flex items-center flex-col text-center px-4">
          <img src="/icons/lighthouse.png" alt="boat" className="w-20 md:w-24" />
          <h1 className="text-3xl md:text-5xl text-darkNavy mb-3 mt-3 md:mb-5">
            A CLASSIC AMERICAN BISTRO IN THE HEART OF THE HUDSON VALLEY
          </h1>
          <p className='text-xl text-darkNavy font-alpina m-5'>
            Nestled in the heart of Beacon, NY, Lyonshare is more than just a restaurant — 
            it's a tribute to the enduring spirit of the Hudson Valley. Our name pays homage 
            to the legendary John Lyon, known to locals as "John Lyon, the Boatman." A 
            colorful figure in Hudson Valley history, Lyon was renowned for his resilience, 
            rugged charm, and deep connection to the Hudson River.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4 p-2 mb-20">
          <a href="/menu/#raw-bar">
            <Button 
              id="product-button" 
              title="RAW BAR" 
              containerClass="flex items-center text-md md:text-xl justify-center gap-1 sm:text-md hover:scale-105"
            />
          </a>
          <a href="/menu/#small-plate">
            <Button 
              id="product-button" 
              title="SMALL PLATE" 
              containerClass="flex items-center text-md md:text-xl justify-center gap-1 sm:text-md hover:scale-105"
            />
          </a>
          <a href="/menu/#mains">
            <Button 
              id="product-button" 
              title="MAINS" 
              containerClass="flex items-center text-md md:text-xl justify-center gap-1 sm:text-md hover:scale-105"
            />
          </a>
          <a href="/menu/#steaks">
            <Button 
              id="product-button" 
              title="STEAKS" 
              containerClass="flex items-center text-md md:text-xl justify-center gap-1 sm:text-md hover:scale-105"
            />
          </a>
          <a href="/menu/#side-dishes">
            <Button 
              id="product-button" 
              title="SIDE DISHES" 
              containerClass="flex items-center text-md md:text-xl justify-center gap-1 sm:text-md hover:scale-105"
            />
          </a>
          <a href="/menu/sweets">
            <Button 
              id="product-button" 
              title="SWEETS" 
              containerClass="flex items-center text-md md:text-xl justify-center gap-1 sm:text-md hover:scale-105"
            />
          </a>
          <a href="/menu/drinks">
            <Button 
              id="product-button" 
              title="DRINKS" 
              containerClass="flex items-center text-md md:text-xl justify-center gap-1 sm:text-md hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FoodandDrinks;
