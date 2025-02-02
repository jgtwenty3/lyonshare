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
  const cursorRef = useRef(null);
  const imageSrc = img || fallbackImg;

  // Split bio into letters
  const bioLetters = bio.split("").map((letter, index) => (
    <span key={index}>{letter}</span>
  ));

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
      const cursor = cursorRef.current;

      if (card) {
        // Create a GSAP timeline for sequential animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom top+=50%",
            scrub: true,
            once: true,
            onEnter: () => {
              const letters = artistBio.querySelectorAll('span');
              gsap.fromTo(
                letters,
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.05,
                  ease: 'power2.out',
                  stagger: {
                    each: 0.05,
                    onStart: function () {
                      const letter = this.target;
                      if (cursor && letter) {
                        gsap.to(cursor, { x: letter.offsetLeft + letter.offsetWidth });
                      }
                    },
                  },
                  onComplete: () => {
                    if (cursor) {
                      cursor.classList.add('blinking-cursor');
                    }
                  },
                }
              );
            }
          }
        });

        // Animate the image
        tl.fromTo(image, 
          { opacity: 0, x: -25 }, 
          { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
        );

        // Animate the artist name and event date earlier
        tl.fromTo([artistName, eventDate], 
          { opacity: 0, y: -50 }, 
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.2 }, '-=0.8'
        );
      }
    },
    { scope: cardRef }
  );

  return (
    <div ref={cardRef} className={`w-full p-4 flex flex-col shadow-lg shadow-darkNavy ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center ${fullWidth ? 'border-2 border-darkNavy ' : 'border border-darkNavy rounded-lg'}`}>
      <img ref={imageRef} src={imageSrc} alt={artist} className="w-full md:w-1/2 h-64 md:h-96 object-cover" />
      <div className="p-4 w-full md:w-1/2 artist-bio">
        <h3 ref={artistRef} className="text-4xl font-bold font-alpina uppercase text-darkNavy mb-2 underline">{artist}</h3>
        <p ref={dateRef} className="text-darkNavy text-3xl font-alpina uppercase">{formattedDate}</p>
        <p ref={bioRef} className="mt-5 text-2xl text-darkNavy font-alpina uppercase">
          {bioLetters}
          {/* <span ref={cursorRef} className="blinking-cursor">|</span> */}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
