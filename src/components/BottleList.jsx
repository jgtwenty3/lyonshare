import React from 'react';

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
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="w-full">
                  <p className="text-xl font-alpina font-semibold">{item.name}</p>
                  {item.ingredients && <p className="text-md text-darkNavy ml-2 font-alpina">{item.ingredients}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottleList;