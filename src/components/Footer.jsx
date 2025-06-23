import React, { useState } from "react";
import MailchimpModal from "./MailChimpModal";
import facebook from "../../public/icons/facebook.svg";
import instagram from "../../public/icons/instagram.svg";
import spotify from "../../public/icons/spotify.svg";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-darkNavy text-manliusLimestone md:py-4 md:px-4 mt-1 sticky bottom-0">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <div className="mb-4 text-center md:text-left md:mb-0">
            <a href="/">
              <h4 className="hidden md:block text-xl font-bold font-alpina">
                LYONSHARE PUBLIC HOUSE
              </h4>
            </a>
            <p className="text-lg font-alpina hidden md:block">
              246 MAIN STREET BEACON, NY 12508
            </p>
            <p className="text-lg font-alpina hidden md:block">
              <a href="tel:+18452754932">845.275.4932</a>
            </p>
          </div>

          <div className="social-links flex space-x-4">
            <a
              href="https://www.facebook.com/p/Lyonshare-Public-House-61566837301993/"
              className="text-white hidden md:block"
            >
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/lyonsharebeacon"
              className="text-white hidden md:block"
            >
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://open.spotify.com/user/31anlz2pzlcf6zgwduni7irr3t3m?si=51f245100bc84f0b"
              className="text-white hidden md:block"
            >
              <img src={spotify} alt="Spotify" className="w-6 h-6" />
            </a>
            <a href="https://resy.com/cities/beacon-ny-ny/venues/lyonshare?seats=2&date=2024-12-11">
              <h4 className="font-alpina border-2 border-manliusLimestone md:p-1 mb-2 p-4 hover:heartbeat">
                RESERVATIONS
              </h4>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-alpina border-2 border-manliusLimestone md:p-1 p-4 hover:heartbeat mb-2"
            >
              KEEP IN TOUCH
            </button>
          </div>
          {/* Centered Instagram icon for mobile */}
          <div className="w-full flex justify-center mt-2 md:hidden">
            <a
              href="https://www.instagram.com/lyonsharebeacon"
              className="text-white"
            >
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>


        </div>
      </footer>

      {/* Render the Modal */}
      <MailchimpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;
