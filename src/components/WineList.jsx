import React from 'react';

const WineList = ({ wineSection }) => {
  if (!wineSection || !wineSection.items) {
    return <div className="p-10 flex flex-col items-center">No items available</div>;
  }

  return (
    <div className="flex flex-col items-center px-4 md:px-10">
      <div className="mb-10 text-darkNavy flex flex-col items-center w-full text-center">
        {wineSection.items.map((section, sectionIndex) => (
          <div key={sectionIndex} className="w-full mb-8">
            <h3 className="text-2xl font-bold mb-4 font-alpina">{section.title}</h3>
            <ul className="flex flex-col items-center gap-4">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="w-full">
                  <p className="text-xl font-alpina font-semibold">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineList;
