import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const wordsList = [
  'OYSTERS', 'COCKTAILS', 'STEAK', 'MUSIC', 'LYONSHARE PUBLIC HOUSE'
];
const imageList = [
  '/images/food/pour.webp',
  '/images/food/martini.webp',
  '/images/food/burgerFriesDrink.webp',
  'images/collage.png',
  'images/background.jpeg'
];

const WordFlash = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
     const updateContent = (index) => { 
      setCurrentIndex(index); 
    }; 
      ScrollTrigger.create({ 
        trigger: containerRef.current, 
        start: 'top top', end: () => `+=${containerRef.current.offsetHeight}`, 
        scrub: true, pin: true, 
        snap: { snapTo: 1 / (wordsList.length - 1), 
        duration: 2, delay: 0.1, }, 
        onUpdate: (self) => {
           const newIndex = Math.round(self.progress * (wordsList.length - 1)); 
           if (newIndex !== currentIndex) { updateContent(newIndex); } }, }); 
           return () => { 
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
          }; 
        }, { scope: containerRef });
        
  return (
    <div ref={containerRef} className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-5 md:px-10 mt-24 md:mt-8 lg:mt-4 md:mr-8 lg:mr-16">
      <div className="w-full md:w-3/4 h-1/2 md:h-5/6 border-4 mt-0 md:mt-0 lg:mt-0 border-transparent mr-2 md:mr-4 lg:mr-8">
        <img 
          src={imageList[currentIndex]} 
          alt={wordsList[currentIndex]} 
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`w-full md:w-1/4 h-1/2 md:h-5/6 flex mt-5 md:mt-0 lg:mt-0 items-center justify-center mr-2 text-3xl md:text-5xl lg:text-7xl font-bold text-center p-2 md:p-4 transition-colors duration-500 border-4 md:ml-4 lg:ml-8 ${currentIndex % 2 === 0 ? 'bg-white text-darkNavy border-darkNavy' : 'bg-darkNavy text-white border-white'}`}
      >
        {wordsList[currentIndex]}
      </div>
      
    </div>
  );
};

export default WordFlash;
