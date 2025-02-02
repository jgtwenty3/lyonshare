// components/ArtistCard.js
import React from 'react';

const ArtistCard = ({ artist, date, img, bio, reverse, fullWidth }) => {
  return (
    <div className={`w-full p-4 flex flex-col shadow-lg shadow-black ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center ${fullWidth ? 'border-2 border-darkNavy ' : 'border border-darkNavy rounded-lg'}`}>
      <img src={img} alt={artist} className="w-full md:w-1/2 h-64 md:h-96 object-cover" />
      <div className="p-4 w-full md:w-1/2">
        <h3 className="text-4xl font-bold font-alpina uppercase text-darkNavy mb-2">{artist}</h3>
        <p className="text-darkNavy text-2xl font-alpina">{new Date(date).toLocaleDateString()}</p>
        <p className="mt-5 text-3xl text-darkNavy">{bio}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
