import React from "react";
import { useInView } from "react-intersection-observer";

const hours = [
  "Mon 5pm-12am",
  "Tues 5pm-12am(bar only)",
  "Wed 4pm-12am(happy hour 4-6pm)",
  "Thurs 4pm-12am(happy hour 4-6 pm)",
  "Fri 4pm-12am(happy hour 4-6pm)",
  "Sat & Sun 11am-3pm(brunch)"
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
        <h2 className="text-md md:text-3xl mb-4 text-darkNavy text-center font-alpina">246 MAIN STREET, BEACON, NY, 12508</h2>
        <ul className='text-center'>
            {hours.map((hour, index) => (
                <li key={index} className="mb-8 text-md md:text-xl text-darkNavy font-alpina">
                    {hour}
                </li>
            ))}
        </ul>
        <div className="ml-24 md:ml-32 flex flex-row gap-4 w-full justify-center text-md md:text-xl text-darkNavy font-alpina md:mb-5">5pm-12am(dinner)</div>
      </div>
      <div className="relative w-full text-center">
        <img src="/images/map.png" className="w-full" alt="Map" style={{ marginTop: '-20px' }} />
        <a href="https://www.google.com/maps/place/Lyonshare+Public+House" target="_blank" rel="noopener noreferrer" className="absolute bg-white text-darkNavy font-medium py-2 px-4 text-xl border-2 border-darkNavy hover:bg-darkNavy hover:text-manliusLimestone transition" style={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          GET DIRECTIONS
        </a>
      </div>
    </div>
  );
};

export default Hours;
