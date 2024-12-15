import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';


gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const [imageSrc, setImageSrc] = useState('/images/johnphoto.jpeg');
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top center',
      onEnter: () => {
        gsap.delayedCall(2, () => { // 2 seconds delay
          gsap.to(imageRef.current, {
            opacity: 0,
            duration: 2,
            onComplete: () => {
              setImageSrc('/images/johnPainting.png');
              gsap.to(imageRef.current, { opacity: 1, duration: 1 });
            },
          });
        });
      },
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div>
      <div className="relative w-screen h-[600px] md:h-[800px]">
        <img
          src="/images/inside.jpg"
          alt="boat"
          className="w-full h-full object-cover border-2 border-darkNavy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={ref} className={`bg-white text-darkNavy border-2 border-darkNavy text-4xl md:text-6xl font-bebas font-bold px-6 py-2 shadow-lg shadow-black ${inView ? 'scale-in-hor-left' : ''}`}>
            ABOUT
          </div>
        </div>
      </div>
      
      <div className="py-10 px-5 md:px-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-montefiore text-5xl mb-6 text-darkNavy underline">
            OUR STORY
          </h1>
          <p className="text-lg text-darkNavy font-alpina leading-relaxed mb-6 mr-2 md:mr-0">
            LyonShare Beacon represents the culminating vision of
            owner Bud Schmeling's decades long journey helming
            some of the most iconic establishments in NYC. Black
            Betty, Peter Luger, and Gage & Tollner to name a few; this
            new venture will showcase his passion for hospitality and
            promises to be a feast for the senses.
          </p>
          <p className="text-lg text-darkNavy font-alpina leading-relaxed mb-6 mr-2 md:mr-0">
            We've assembled a talented and dedicated team, focused
            on quality, execution, and elevated service that caters to
            the desires of our community and provides an exhilarating
            experience for all.
          </p>
          <p className="text-lg text-darkNavy font-alpina leading-relaxed mb-6 mr-2 md:mr-0">
            Lyonshare Public House is a classic American bistro in an
            historic building, right in the heart of Main Street. We're
            excited to welcome you in to gather with friends, make new
            acquaintances and pass some time in this labor of love.
          </p>
        </div>
      </div>
      {/* <div className="flex justify-center mt-10">
          <img src="/images/logo.svg" alt="boat" width={100} height={200} />
        </div> */}

      <div className="p-10" ref={textRef}>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          
          <div className="w-full text-center">
            <h1 className="font-montefiore text-5xl mb-6 text-darkNavy underline">
              ABOUT
            </h1>
            <p className="text-lg text-darkNavy font-alpina leading-relaxed mb-6 ">
              Lyonshare Public House, in the heart of Beacon, NY, pays tribute to Hudson Valley's spirit and the legendary John Lyon,
              known for his resilience and connection to the Hudson River. With a modern take on classic American bistro fare and crafted drinks, we celebrate the region's authenticity and charm.
            </p>
          </div>
          <img
            ref={imageRef}
            src={imageSrc}
            alt="John Lyon"
            width={300} // Adjust width to fit better on larger devices
            height={400} // Adjust height accordingly
            className="border-2 object-cover bg-darkNavy p-5 border-barnishedBrass ml-2 md:ml-4"
          />
        </div>

       
      </div>
    </div>
  );
};

export default AboutPage;
