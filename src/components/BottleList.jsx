import React from 'react';
import { useInView } from 'react-intersection-observer';

const BottleList = ({ bottleSection }) => {
  if (!bottleSection || !bottleSection.items) {
    return <div className="p-10 flex flex-col items-center">No items available</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 text-darkNavy flex flex-col items-center w-full text-center">
        <h2 className="text-3xl font-bold mb-6 font-alpina">{bottleSection.title}</h2>
        {bottleSection.items.map((section, sectionIndex) => (
          <div key={sectionIndex} className="w-full mb-8">
            <h3 className="text-2xl font-bold mb-4 font-alpina">{section.subtitle}</h3>
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => {
                const { ref, inView } = useInView({
                  threshold: 0.1, // Adjust this value to control when the animation starts
                  triggerOnce: true, // Only trigger the animation once
                });

                return (
                  <li ref={ref} key={itemIndex} className={`w-full text-xl font-alpina ${inView ? 'scale-in-top' : ''}`}>
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottleList;
