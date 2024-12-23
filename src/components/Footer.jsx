import React from 'react';

import facebook from "../../public/icons/facebook.svg";
import instagram from "../../public/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-manliusLimestone py-4 px-4 mt-1 sticky bottom-0">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center">
        <div className="mb-4 text-center md:text-left md:mb-0">
          <h4 className="text-xl font-bold font-alpina">LYONSHARE PUBLIC HOUSE</h4>
          <p className="text-lg font-alpina">246 MAIN STREET, BEACON, NY 12508</p>
          {/* <p>PHONE: 845-476-8413 (messaging service)</p> */}
        </div>
        
        <div className="social-links flex space-x-4">
          <a href="https://www.facebook.com/p/Lyonshare-Public-House-61566837301993/" className="text-white hover:text-teal-500">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/lyonsharebeacon" className="text-white hover:text-teal-500">
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href = "https://resy.com/cities/beacon-ny-ny/venues/lyonshare?seats=2&date=2024-12-11">
          <h4 className='font-alpina'>RESERVATIONS</h4>
        </a>
        </div>
       
      </div>
      {/* <div className="text-center mt-4">
        <p className="text-md font-alpina">© {new Date().getFullYear()} LYONSHARE PUBLIC HOUSE. ALL RIGHTS RESERVED.</p>
      </div> */}
    </footer>
  );
}

export default Footer;
