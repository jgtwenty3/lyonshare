import React from 'react';
import { useInView } from 'react-intersection-observer';

const MenuList = ({ menuSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="mb-10 text-darkNavy flex flex-col items-center w-full text-center">
        <h2 className="text-3xl font-bold mb-6 font-alpina">{menuSection.title}</h2>
        <ul className="space-y-4">
          {menuSection.items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-lg font-alpina font-semibold  ">
              <span className="font-bold text-xl ">{item.name}</span>
              <br/>
              <span className="ml-2">{item.ingredients}</span>
              <span className="ml-4">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <img src="/images/logo.svg" alt="lighthouse" width={100} height={50} />
      </div>
    </div>
  );
};

export default MenuList;
