import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const fallbackImg = "/images/background.jpeg";

const ArtistCard = ({ artist, date, img, bio, reverse, fullWidth }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const artistRef = useRef(null);
  const dateRef = useRef(null);
  const bioRef = useRef(null);
  const imageSrc = img || fallbackImg;

  // Convert the date string to a Date object and format it to local time
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  useGSAP(
    () => {
      const card = cardRef.current;
      const image = imageRef.current;
      const artistName = artistRef.current;
      const eventDate = dateRef.current;
      const artistBio = bioRef.current;

      if (card) {
        // Create a GSAP timeline for sequential animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom top+=50%",
            scrub: true,
            once: true,
          }
        });

        // Animate the image
        tl.fromTo(image, 
          { opacity: 0, x: -25 }, 
          { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
        );

        // Animate the artist name and event date
        tl.fromTo([artistName, eventDate], 
          { opacity: 0, y: -50 }, 
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.2 }, '-=0.8'
        );

        // Animate the bio sliding in from the opposite side of the photo
        tl.fromTo(artistBio,
          { opacity: 0, x: reverse ? 25 : -25 },
          { opacity: 1, x: 0, duration: 2, ease: 'power2.out' }, '-=0.6'
        );
      }
    },
    { scope: cardRef }
  );

  return (
    <div ref={cardRef} className={`w-full p-4 flex flex-col shadow-lg shadow-darkNavy ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center ${fullWidth ? 'border-2 border-darkNavy ' : 'border border-darkNavy rounded-lg'}`}>
      <div className="relative w-full md:w-1/2 h-64 md:h-96 bg-darkNavy">
        <img ref={imageRef} src={imageSrc} alt={artist} className="absolute inset-0 w-full h-full object-fill" />
      </div>
      <div className="p-4 w-full md:w-1/2 artist-bio">
        <h3 ref={artistRef} className="text-4xl font-bold font-alpina uppercase text-darkNavy mb-2 underline">{artist}</h3>
        <p ref={dateRef} className="text-darkNavy text-3xl font-alpina uppercase">{formattedDate}</p>
        <p ref={dateRef} className="text-darkNavy text-3xl font-alpina uppercase">8 PM</p>
        <p ref={bioRef} className="mt-5 text-md md:text-2xl text-darkNavy font-alpina">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
