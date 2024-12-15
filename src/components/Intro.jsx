import React from 'react';
import Button from './Button';
import { useInView } from 'react-intersection-observer';


const Intro = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });
  return (
    <div>
      <div className="flex flex-col md:flex-row h-auto p-5 mr-0 md:mr-3 mb-5">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center border-darkNavy border-4 p-5 md:p-8 w-full border-dashed">
          <h1  className={`text-5xl md:text-7xl mb-4 text-darkNavy text-center ${inView ? 'tracking-in-expand':""}`}>VISIT US</h1>
          <img src="/images/logo.svg" alt="knot" className="mb-5 w-20 md:w-24" />
          <h2 ref={ref} className="text-2xl md:text-4xl mb-2 text-darkNavy text-center">KITCHEN 5-10PM</h2>
          <h2 className="text-2xl md:text-4xl mb-2 text-darkNavy text-center">BAR UNTIL MIDNIGHT</h2>
          <h2 className="text-2xl md:text-4xl pb-6 md:pb-8 text-darkNavy text-center">CLOSED TUESDAYS</h2>
          <h2 className="text-2xl md:text-4xl mb-8 text-darkNavy text-center">246 MAIN STREET, BEACON, NY</h2>
          <div className="flex flex-row gap-4 w-full justify-center">
            <a href="https://resy.com/cities/beacon-ny-ny/venues/lyonshare?seats=2&date=2024-12-11">
              <Button
                id="product-button"
                title="RESERVATIONS"
                containerClass="flex items-center justify-center gap-2 px-4 py-2 text-lg md:text-xl hover:scale-105"
              />
            </a>
            <a href="/hours">
              <Button
                id="product-button"
                title="FIND US"
                containerClass="flex items-center justify-center gap-2 px-4 py-2 text-lg md:text-xl hover:scale-105"
              />
            </a>
          </div>
        </div>

        
        
      
      
    </div>
    

    </div>
    
  );
};

export default Intro;
