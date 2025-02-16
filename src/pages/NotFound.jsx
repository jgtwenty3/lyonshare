import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import johnny from "/images/johnny.svg";
import arm from "/images/arm.svg";
import { useGSAP } from '@gsap/react';

const NotFound = () => {
  const johnnyRef1 = useRef(null);
  const armRef1 = useRef(null);
  const johnnyRef2 = useRef(null);
  const armRef2 = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // First set of animations
    gsap.fromTo(johnnyRef1.current, {
      x: '100vw', // Start position (off-screen to the right)
    }, {
      x: 0, // End position (current position)
      duration: 1,
      delay: 2,
      ease: 'power3.out', // Smooth easing effect
    });

    gsap.fromTo(armRef1.current, {
      y: '100vh', // Start position (off-screen to the bottom)
      rotation: -80, // Start rotation
    }, {
      y: 0, // End position (current position)
      rotation: 45, // Increased end rotation
      duration: 1,
      delay: 3, // Delay for a smooth sequence
      ease: 'power3.out', // Smooth easing effect
    });

    // Second set of animations
    gsap.fromTo(johnnyRef2.current, {
      x: '-100vw', // Start position (off-screen to the left)
    }, {
      x: 0, // End position (current position)
      duration: 1,
      delay: 6, // Delay after the first set of animations
      ease: 'power3.out', // Smooth easing effect
    });
    gsap.fromTo(armRef2.current, {
      y: '100vh', // Start position (off-screen to the bottom)
      rotation: 80, // Start rotation
    }, {
      y: 0, // End position (current position)
      rotation: 130, // Increased end rotation counterclockwise
      duration: 1,
      delay: 7, // Delay after the first set of animations
      ease: 'power3.out', // Smooth easing effect
    });
    
    

  
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-6 overflow-hidden">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 text-darkNavy mt-20">WRONG WAY</h1>
        <p className="text-4xl mb-8 uppercase text-darkNavy">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">
          <button ref ={buttonRef} className="bg-white text-darkNavy border-2 border-darkNavy hover:bg-darkNavy hover:text-white py-2 px-4 rounded-none transition duration-200 text-xl">
            GO BACK HOME
          </button>
        </Link>
      </div>
      <div className="relative flex items-center justify-center w-full h-full"> {/* Ensure full height container */}
        <img src={johnny} alt="Johnny" ref={johnnyRef1} className="absolute bottom-10 -right-24 w-[35%] max-w-none md:w-[30%]" />
        <img src={arm} alt="Arm pointing" ref={armRef1} className="hidden md:block absolute bottom-16 w-[28%] right-64 opacity-90" />
        <img src={johnny} alt="Johnny" ref={johnnyRef2} className="absolute bottom-10 -left-24 w-[35%] max-w-none md:w-[30%] transform scale-x-[-1]" />
        <img src={arm} alt="Arm pointing" ref={armRef2} className="hidden md:block absolute bottom-16 w-[28%] left-64 opacity-90 transform scale-x-[-1] -rotate-45" />
      </div>
    </div>
  );
};

export default NotFound;
