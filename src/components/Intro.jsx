import React from 'react';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

const hours = [
  "Mon 5pm-9PM",
  "Tues-Weds 5PM- 11PM(bar only)",
  "Thurs 5PM-9PM",
  "Fri 5PM-10PM",
  "Sat 5PM-10PM",
  "Sun 5PM-9PM",
  "LUNCH",
  "Thurs-Fri 11:30-2:30PM",
  "BRUNCH",
  "Sat & Sun 11AM-3PM"
];

const Intro = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });
  return (
    <div>
      <div className="flex flex-col md:flex-row h-auto p-5 mr-0 md:mr-3 ">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-5 md:p-8 w-full">
          {/* <h1 className={`text-5xl md:text-7xl mb-4 text-darkNavy text-center ${inView ? 'tracking-in-expand' : ''}`}>
            VISIT US
          </h1> */}
          <h3 className="text-3xl md:text-4xl mb-6 text-darkNavy text-center">
            246 MAIN STREET BEACON, NY, 12508
          </h3>
          <h3 className='font-alpina text-md md:text-xl mb-6 text-center'>
            KITCHEN
          </h3>
          <ul className='text-center'>
            {hours.map((hour, index) => (
              <li key={index} className="mb-2 md:mb-5 text-md md:text-xl text-darkNavy font-alpina">
                {hour}
              </li>
            ))}
          </ul>
        
        </div>
      </div>
      <div className='mb-10'>
        <h4 className='text-3xl md:text-4xl mb-6 text-darkNavy text-center'>HAPPY HOUR</h4>
        <div className='font-alpina text-center text-md md:text-xl'>Mon-Thurs 5PM-7PM</div>
        <div className='font-alpina text-center text-md md:text-xl'>Fri 4PM-6PM</div>
        <div className='font-alpina text-center text-md md:text-xl'>$10 Wine</div>
        <div className='font-alpina text-center text-md md:text-xl'>$10 Negronis</div>
        <div className='font-alpina text-center text-md md:text-xl'>Draft Beer Specials</div>
        
      </div>
      <div>
        
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="mailto:bud@lyonsharebeacon.com"
          className="bg-white text-darkNavy text-lg uppercase font-medium py-2 px-6 border-2 border-darkNavy hover:bg-white hover:text-darkNavy transition"
        >
          Contact for Private Events
        </a>      
      </div>

    </div>
  );
};

export default Intro;
