import React, { useState } from 'react';
import Button from "../components/Button";
import MenuList from '../components/MenuList';
import DrinkList from '../components/DrinkList';
import WineList from '../components/WineList';
import BeerList from '../components/BeerList';
import GlassWine from '../components/glassWine';
import { rawBarMenu, brunchMenu, lunchMenu, dinnerMenu, cocktailMenu, wineList, beerMenu, bottleList } from '../lib/data';
import { useInView } from 'react-intersection-observer';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(dinnerMenu);
  const [showAllDrinks, setShowAllDrinks] = useState(false);
  const [showWineList, setShowWineList] = useState(false);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setShowAllDrinks(false);
    setShowWineList(false); 
  };

  const handleShowAllDrinks = () => {
    setSelectedMenu(null); 
    setShowAllDrinks(true);
    setShowWineList(false); 
  };

  const handleShowWineList = () => {
    setSelectedMenu(null);
    setShowAllDrinks(false); 
    setShowWineList(true);
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div>
      <div className="relative w-screen h-[600px] md:h-[800px]">
        <img
          src="/images/food/drinkNFood.webp"
          alt="boat"
          className="w-full h-full object-cover border-2 border-darkNavy"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div ref={ref} className={`bg-white text-darkNavy border-2 border-darkNavy text-4xl md:text-6xl font-bebas font-bold px-6 py-2 shadow-lg shadow-black ${inView ? 'scale-in-hor-left' : ''}`}>
            MENU
          </div>
        </div> */}
      </div>
      <div className="p-5 md:p-10">
        <div className="flex flex-wrap justify-center gap-2 mt-4 p-2 mb-20">
          <Button title="DINNER" onClick={() => handleMenuClick(dinnerMenu)} containerClass={"border-2 border-darkNavy"} />
          <Button title="BRUNCH" onClick={() => handleMenuClick(brunchMenu)} containerClass={"border-2 border-darkNavy"} />
          <Button title="LUNCH" onClick={() => handleMenuClick(lunchMenu)} containerClass={"border-2 border-darkNavy"} />
          <Button title="RAW BAR" onClick={() => handleMenuClick(rawBarMenu)} containerClass={"border-2 border-darkNavy"} />
          <Button title="COCKTAILS & BEER" onClick={handleShowAllDrinks} className="col-span-2 sm:col-span-1 flex justify-center sm:justify-start" containerClass={"border-2 border-darkNavy"} />
          <Button title="WINE LIST" onClick={handleShowWineList} containerClass={"border-2 border-darkNavy"} />
        </div>
      </div>
      <div>
        {selectedMenu && (
          Array.isArray(selectedMenu) ? (
            selectedMenu.map((menu, index) => (
              <MenuList key={index} menuSection={menu} />
            ))
          ) : (
            <MenuList menuSection={selectedMenu} />
          )
        )}
        {showAllDrinks && (
          <>
            <div className="w-full px-4 md:px-10">
              {cocktailMenu.map((drinkSection, index) => (
                <DrinkList key={index} drinkSection={drinkSection} />
              ))}
            </div>
            <div className="w-full px-4 md:px-10 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <GlassWine />
              <BeerList beerSection={beerMenu[0]} />
              
            </div>
          </>
        )}
        {showWineList && (
          <div className="flex flex-col items-center px-4 md:px-10">
            <WineList wineSection={wineList} />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center p-10">
        <img src="/images/logo.svg" alt="knot" className="mb-5 w-20 md:w-24" />
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
