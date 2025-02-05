import React from 'react';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

const hours = [
  "Mon 5pm-12am",
  "Tues 5pm-12am(bar only)",
  "Wed 5pm-12am",
  "Thurs 5pm-12am",
  "Fri 5pm-12am",
  "Sat 5pm-12pm",
  "Sun 5pm-12pm",
  "BRUNCH",
  "Sat & Sun 11am-3pm"
];

const Intro = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });
  return (
    <div>
      <div className="flex flex-col md:flex-row h-auto p-5 mr-0 md:mr-3 mb-5">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-5 md:p-8 w-full">
          {/* <h1 className={`text-5xl md:text-7xl mb-4 text-darkNavy text-center ${inView ? 'tracking-in-expand' : ''}`}>
            VISIT US
          </h1> */}
          <h1 className="text-3xl md:text-4xl mb-6 text-darkNavy text-center">
            246 MAIN STREET BEACON, NY, 12508
          </h1>
          <ul className='text-center'>
            {hours.map((hour, index) => (
              <li key={index} className="mb-2 md:mb-5 text-md md:text-xl text-darkNavy font-alpina">
                {hour}
              </li>
            ))}
          </ul>
        
        </div>
      </div>
    </div>
  );
};

export default Intro;
