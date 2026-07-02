import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ArtistCard = ({ artist, date, reverse, fullWidth }) => {
  const cardRef = useRef(null);
  const artistRef = useRef(null);
  const dateRef = useRef(null);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  useGSAP(
    () => {
      const card = cardRef.current;
      const artistName = artistRef.current;
      const eventDate = dateRef.current;

      if (card) {
        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom top+=50%",
            scrub: true,
            once: true,
          }
        })
        .fromTo(
          [artistName, eventDate],
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.2,
          }
        );
      }
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className={`w-auto p-8 shadow-lg shadow-darkNavy flex justify-center items-center ${
        fullWidth
          ? 'border-2 border-darkNavy'
          : 'border border-darkNavy rounded-lg'
      }`}
    >
      <div className="text-center">
        <h3
          ref={artistRef}
          className="text-4xl md:text-5xl font-bold font-alpina uppercase text-darkNavy underline mb-4"
        >
          {artist}
        </h3>

        <p
          ref={dateRef}
          className="text-3xl font-alpina uppercase text-darkNavy"
        >
          {formattedDate}
        </p>

        <p className="text-3xl font-alpina uppercase text-darkNavy">
          8 PM
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;