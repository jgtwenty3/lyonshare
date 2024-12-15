import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TiLocationArrow } from "react-icons/ti";
import clsx from "clsx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from './Button';
import { useWindowScroll } from "react-use";
import gsap from 'gsap';

const navItems = ["HOME", "ABOUT", "MENU", "GALLERY", "HOURS & LOCATION", "EVENTS"];

const Navbar = () => {
  const audioElementRef = useRef(null);

  const navContainerRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      setIsScrolledUp(false);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      setIsScrolledUp(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      setIsScrolledUp(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none bg-transparent transition-all duration-700 sm:inset-x-6 md:mr-10"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="https://resy.com/cities/beacon-ny-ny/venues/lyonshare?seats=2&date=2024-12-11">
              <Button
                id="product-button"
                title="RESERVATIONS"
                rightIcon={<TiLocationArrow />}
                containerClass={`md:flex hidden items-center justify-center gap-1 text-2xl bg-white py-2 px-6`}
              />
            </a>
          </div>
          <div className="flex h-full items-center space-x-2">
            <div className="hidden md:flex space-x-2 bg-transparent">
              {navItems.map((item, index) => {
                let link = `/${item === 'HOME' ? '' : item.toLowerCase()}`;
                if (item === 'HOURS & LOCATION') link = '/hours';
                return (
                  <Link
                    key={index}
                    to={link}
                    className={`nav-hover-btn ${isScrolledUp ? "bg-white text-darkNavy border-2 border-darkNavy" : "bg-transparent text-white"}`}
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
              <h2 className={`nav-hover-btn ${isScrolledUp ? "bg-white text-darkNavy border-2 border-darkNavy" : "bg-transparent text-white"}`}>tunes </h2>
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
                className={`text-darkNavy bg-white p-2 focus:outline-none mr-2 border-2 border-darkNavy`}
              >
                {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="absolute top-16 left-2 w-full bg-darkNavy bg-opacity-90 text-darkNavy p-5">
            <ul className="flex flex-col items-end py-2 px-3 m-2">
              {navItems.map((item, index) => {
                let link = `/${item === 'HOME' ? '' : item.toLowerCase()}`;
                if (item === 'HOURS & LOCATION') link = '/hours';
                return (
                  <li key={index} className="my-2">
                    <Link
                      to={link}
                      className={`nav-hover-btn2 ${isScrolledUp ? "bg-transparent text-darkNavy" : "bg-transparent text-white"}`}
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
