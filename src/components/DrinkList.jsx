import React from 'react';
import { useInView } from 'react-intersection-observer';

const DrinkList = ({ drinkSection }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 text-darkNavy flex flex-col items-center w-full text-center">
        <h2 className="text-4xl font-bold mb-6 font-alpina">{drinkSection.title}</h2>
        <ul className="space-y-4">
          {drinkSection.items.map((item, itemIndex) => {
            const { ref, inView } = useInView({
              threshold: 0.1, // Adjust this value to control when the animation starts
              triggerOnce: true, // Only trigger the animation once
            });

            return (
              <li ref={ref} key={itemIndex} className="w-full flex flex-col items-center text-xl font-alpina font-semibold md:flex-row md:justify-center">
                <p className='text-2xl mb-1 md:mb-0 md:mr-4'>{item.name}</p>
                <span className='text-xl'>{item.ingredients}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DrinkList;
