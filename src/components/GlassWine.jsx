import React from 'react';
import { bottleList } from '../lib/data';

const GlassWine = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        {bottleList[0].items.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8 w-full text-center">
            <h1 className="text-3xl font-semibold mb-6 text-darkNavy font-alpina">{section.subtitle}</h1>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-xl font-alpina">{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassWine;
