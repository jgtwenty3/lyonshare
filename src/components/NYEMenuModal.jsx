import React from 'react';

const NYEMenuModal = ({ isOpen, onClose, menuData }) => {
  if (!isOpen) return null;  // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2">
        <button
          onClick={onClose}  // Close the modal when the button is clicked
          className="absolute top-4 right-4 text-xl font-bold"
        >
          X
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">{menuData.title}</h2>
          <ul className="space-y-4">
            {menuData.items.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg mb-2">
                      <span className="font-semibold">{item.name}</span>
                      <p>{item.ingredients}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NYEMenuModal;
