import React, { useState } from 'react';
import Button from "../components/Button";
import MenuList from '../components/MenuList';
import DrinkList from '../components/DrinkList';
import { rawBarMenu, smallPlateMenu, mainMenu, sideDishes, sweets, drinksMenu, steakMenu } from '../lib/data';
import { useInView } from 'react-intersection-observer';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(mainMenu);
  const [showAllDrinks, setShowAllDrinks] = useState(false);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setShowAllDrinks(false); // Reset drink selection when menu is selected
  };

  const handleShowAllDrinks = () => {
    setSelectedMenu(null); // Reset menu selection when drink is selected
    setShowAllDrinks(true);
  };

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div>
      <div className="relative w-screen h-[600px] md:h-[800px]">
        <img
          src="/images/food/drinkNFood.jpg"
          alt="boat"
          className="w-full h-full object-cover border-2 border-darkNavy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={ref} className={`bg-white text-darkNavy border-2 border-darkNavy text-4xl md:text-6xl font-bebas font-bold px-6 py-2 shadow-lg shadow-black ${inView ? 'scale-in-hor-left' : ''}`}>
            MENU
          </div>
        </div>
      </div>
      <div className="p-5 md:p-10">
      <div className="flex flex-wrap justify-center gap-2 mt-4 p-2 mb-20">
          <Button title="RAW BAR" onClick={() => handleMenuClick(rawBarMenu)} containerClass={"border-2 border-darkNavy"} />
          <Button title="SMALL PLATE" onClick={() => handleMenuClick(smallPlateMenu)} containerClass={"border-2 border-darkNavy"} />
          <Button title="MAINS" onClick={() => handleMenuClick(mainMenu)} containerClass={"border-2 border-darkNavy"}/>
          <Button title="STEAKS" onClick={() => handleMenuClick(steakMenu)} containerClass={"border-2 border-darkNavy"}/>
          <Button title="SIDE DISHES" onClick={() => handleMenuClick(sideDishes)} containerClass={"border-2 border-darkNavy"}/>
          <Button title="SWEETS" onClick={() => handleMenuClick(sweets)} containerClass={"border-2 border-darkNavy"}/>
          <Button title="DRINKS" onClick={handleShowAllDrinks} className="col-span-2 sm:col-span-1 flex justify-center sm:justify-start"containerClass={"border-2 border-darkNavy"} />
        </div>
      </div>
      <div>
        {selectedMenu && <MenuList menuSection={selectedMenu} />}
        {showAllDrinks && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {drinksMenu.map((drinkSection, index) => (
              <DrinkList key={index} drinkSection={drinkSection} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center p-10">
        <a
          href="/LyonShareMenuOct31.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-darkNavy py-2 px-4 shadow-lg hover:bg-darkNavy hover:text-white transition duration-300 border-2 border-blackIron"
        >
          Download Menu
        </a>
      </div>
    </div>
  );
};

export default Menu;
