import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = ({ backgroundImage, logoImage, animationDuration = 1 }) => {
  const logoRef = useRef(null);
  const windowSize = useRef(window.innerWidth);
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current?.children || [];
    
    if (letters.length > 0) {
      gsap.fromTo(
        letters,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: {
            each: 0.3,
            onStart: function () {
              const cursor = cursorRef.current;
              const letter = this.target;
              if (cursor && letter) {
                gsap.to(cursor, { x: letter.offsetLeft + letter.offsetWidth });
              }
            },
          },
          onComplete: () => {
            if (cursorRef.current) {
              cursorRef.current.classList.add('blinking-cursor');
            }
          },
        }
      );
    }

    return () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('blinking-cursor');
      }
    };
  }, [animationDuration]);

  return (
    <div className="relative w-screen overflow-x-hidden shadow-md shadow-blackIron">
      <div className="relative">
        {/* Large Screen Image */}
        <img
          src="/images/lighthouse2.png"
          alt="background"
          className="w-full h-auto hidden md:block object-cover"
        />
        {/* Small Screen Image */}
        <img
          src="/images/lighthouse6.png"
          alt="lighthouse"
          className="w-full h-screen md:hidden object-cover"
        />
        <div
          ref={textRef}
          className="absolute top-0 left-0 w-full flex md:flex-row md:items-start md:justify-center items-end md:bottom-64 ml-0 md:ml-2 md:mt-96 md:space-x-2 space-x-2 pb-4 mt-5"
        >
          {Array.from("LYONSHARE").map((letter, index) => (
            <h1
              key={index}
              className="bg-transparent text-6xl md:text-7xl text-darkNavy  ml-3 font-extrabold"
              
            >
              {letter}
            </h1>
          ))}
          <div ref={cursorRef} className="text-7xl text-darkNavy font-extrabold">|</div>
        </div>
        <div className="absolute top-20 left-0 w-full flex md:flex-row md:items-start md:justify-center items-end md:bottom-64 md:ml-2 md:mt-96 md:space-x-2 space-x-2 pb-4 ml-5 mt-5">
          <h1 className="font-alpina text-2xl text-darkNavy">PUBLIC HOUSE</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;