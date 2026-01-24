import React from "react";
import { useInView } from "react-intersection-observer";

const hours = [
  "Mon 5pm-8PM",
  "Thurs 5PM-9PM",
  "Fri 5PM-9PM",
  "Sat 5PM-9PM",
  "Sun 5PM-8PM",
  "LUNCH",
  "Thurs-Fri 11:30-2:30PM",
  "BRUNCH",
  "Sat & Sun 11AM-3PM"
];

const Hours = () => {

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div className="w-full flex flex-col justify-between items-center min-h-screen">
      <div className="flex flex-col justify-center items-center text-center w-full lg:mr-4 p-10">
        <h1 className="mt-8 md:mt-20 text-7xl text-darkNavy md:mb-4=5 mb-10 underline">HOURS AND LOCATION</h1>
        <h2 className="text-3xl md:text-3xl mb-4 text-darkNavy text-center ">246 MAIN STREET, BEACON, NY, 12508</h2>
        <h3 className='font-alpina text-md md:text-xl mb-6 text-center'>
            KITCHEN
          </h3>
        <ul className='text-center'>
            {hours.map((hour, index) => (
                <li key={index} className="mb-8 text-md md:text-xl text-darkNavy font-alpina">
                    {hour}
                </li>
            ))}
        </ul>
        <div className='mb-10'>
          <h4 className='text-3xl md:text-4xl mb-6 text-darkNavy text-center'>HAPPY HOUR</h4>
          <div className='font-alpina text-center text-md md:text-xl'>Mon-Thurs 5PM-7PM</div>
          <div className='font-alpina text-center text-md md:text-xl'>Fri 4PM-6PM</div>
          <div className='font-alpina text-center text-md md:text-xl'>$10 Wine</div>
          <div className='font-alpina text-center text-md md:text-xl'>$10 Negronis</div>
          <div className='font-alpina text-center text-md md:text-xl'>Draft Beer Specials</div>
          
        </div>
        <a href="tel:+18452754932" className="font-alpina text-xl">845.275.4932</a>
        <a href="mailto:bud@lyonsharebeacon.com"
        className="mt-2 bg-white text-darkNavy text-lg uppercase  font-medium py-2 px-6 border-2 border-darkNavy hover:bg-white hover:text-darkNavy transition"
        >
        Contact for Private Events
        </a>

    
      </div>
      <div className="relative w-full text-center">
        <img src="/images/map.png" className="w-full" alt="Map" style={{ marginTop: '-20px' }} />
        <a href="https://maps.app.goo.gl/choSBBZY3AyZqeZXA" target="_blank" rel="noopener noreferrer" className="absolute bg-white text-darkNavy font-medium py-2 px-4 text-xl border-2 border-darkNavy hover:bg-darkNavy hover:text-manliusLimestone transition" style={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          GET DIRECTIONS
        </a>
      </div>
    </div>
  );
};

export default Hours;
