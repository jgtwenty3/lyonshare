import React from 'react';

const DrinkList = ({ drinkSection }) => {
  return (
    <div className="p-10 flex flex-col items-center">
      <div className="mb-10 text-darkNavy flex flex-col items-center w-full text-center">
        <h2 className="text-3xl font-bold mb-6 font-alpina">{drinkSection.title}</h2>
        <ul className="space-y-4">
          {drinkSection.items.map((item, itemIndex) => (
            <li key={itemIndex} className="w-full">
              <p className="text-xl font-alpina font-semibold">{item.name}</p>
              {item.ingredients && <p className="text-md text-darkNavy ml-2 font-alpina">{item.ingredients}</p>}
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default DrinkList;
