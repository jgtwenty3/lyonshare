import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TiLocationArrow } from "react-icons/ti";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from './Button';
import clsx from "clsx";

const navItems = ["HOME", "ABOUT","OURTEAM", "MENU", "GALLERY", "HOURS & LOCATION", "EVENTS", "SHOP"];

const menuCategories = [
  { name: 'Raw Bar', link: '/menu/#raw-bar' },
  { name: 'Brunch', link: '/menu/brunch' },
  { name: 'Dinner', link: '/menu' },
  { name: 'Cocktails', link: '/menu/cocktails' },
  { name: 'Wine List', link: '/menu/wine-list' }
];

const Navbar = () => {
  const audioElementRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAudioIndicator = () => {
    if (isAudioPlaying) {
      audioElementRef.current.pause();
    } else {
      audioElementRef.current.play();
    }
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-16 border-none bg-transparent md:bg-white md:opacity-100">
      <header className="w-full h-full">
        <nav className="flex items-center justify-between h-full p-4">
          <div className="flex items-center gap-7">
            <a href="https://resy.com/cities/beacon-ny-ny/venues/lyonshare?seats=2&date=2024-12-11">
              <Button
                id="product-button"
                title="RESERVATIONS"
                rightIcon={<TiLocationArrow />}
                containerClass="md:flex hidden items-center justify-center gap-1 text-2xl bg-transparent py-2 px-6"
              />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => {
                let link = `/${item === 'HOME' ? '' : item.toLowerCase()}`;
                if (item === 'HOURS & LOCATION') link = '/hours';
                return item === 'MENU' ? (
                  // <div 
                  //   key={index} 
                  //   className="relative nav-hover-btn text-darkNavy" 
                  //   onMouseEnter={handleMouseEnter}
                  //   onMouseLeave={handleMouseLeave}
                  // >
                  //   <Link to={link}>{item}</Link>
                  //   {isDropdownOpen && (
                  //     <div className="absolute left-0 mt-2 w-48 bg-white border border-darkNavy shadow-lg z-50">
                  //       {menuCategories.map((category, idx) => (
                  //         <Link 
                  //           key={idx} 
                  //           to={category.link} 
                  //           className="block px-4 py-2 text-darkNavy hover:bg-white hover:underline"
                  //         >
                  //           {category.name}
                  //         </Link>
                  //       ))}
                  //     </div>
                  //   )}
                  // </div>
                  <Link
                    key={index}
                    to={link}
                    className="nav-hover-btn text-darkNavy"
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    to={link}
                    className="nav-hover-btn text-darkNavy"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="hidden md:flex items-center space-x-0.5 ml-3"
            >
              <h2 className="nav-hover-btn text-darkNavy">tunes </h2>
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/bestJazzClub.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-darkNavy bg-white p-2 focus:outline-none mr-2 border-2 border-darkNavy"
              >
                {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-darkNavy bg-opacity-90 text-darkNavy p-5">
            <ul className="flex flex-col items-end py-2 px-3 m-2">
              {navItems.map((item, index) => {
                let link = `/${item === 'HOME' ? '' : item.toLowerCase()}`;
                if (item === 'HOURS & LOCATION') link = '/hours';
                return (
                  <li key={index} className="my-2">
                    <Link
                      to={link}
                      className="nav-hover-btn2 text-white"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
