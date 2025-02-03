import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const [imageSrc, setImageSrc] = useState('/images/johnphoto.jpeg');
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top center',
      onEnter: () => {
        gsap.delayedCall(2, () => {
          gsap.to(imageRef.current, {
            opacity: 0,
            duration: 2,
            onComplete: () => {
              setImageSrc('/images/johnPainting.png');
              gsap.to(imageRef.current, { opacity: 1, duration: 1.5 });
            },
          });
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div>
      <div className="relative w-screen h-[600px] md:h-[800px]">
        <img
          src="/images/inside.webp"
          alt="boat"
          className="w-full h-full object-cover border-2 border-darkNavy"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div ref={titleRef} className={`bg-white text-darkNavy border-2 border-darkNavy text-4xl md:text-6xl font-bebas font-bold px-6 py-2 shadow-lg shadow-black ${titleInView ? 'scale-in-hor-left' : ''}`}>
            ABOUT
          </div>
        </div> */}
      </div>

      <div className="py-10 px-5 md:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <div className="md:w-[60%]">
            <h1 className="font-montefiore text-5xl md:mt-6 mb-6 text-darkNavy underline" id ="story">
              OUR STORY
            </h1>
            <p ref={ref1} className={`text-lg md:text-2xl uppercase text-darkNavy font-alpina mt-2  mb-6 md:mt-20 leading-relaxed md:mb-6 ${inView1 ? 'text-focus-in' : ''}`}>
            Lyonshare Public House is the culminating vision of owner Bud Schmeling’s decades-long
            journey helming some of the most iconic establishments in NYC: Black Betty (Williamsburg),
            Peter Luger, and Gage & Tollner to name a few. Lyonshare showcases his passion for
            hospitality, dedication to quality food and his keen eye for curating iconic neighborhood
            gathering places.
            </p>
            
          </div>
          <div className="md:w-[35%]">
            <img
              src="/images/bud.webp"
              alt="Our Story"
              className={`w-full h-full object-cover border-2 border-darkNavy ${titleInView ? 'slit-in-vertical' : ''}`}
            />
          </div>
        </div>
      </div>

      <div className="py-10 px-5 md:px-10" ref={textRef}>
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between">
          <div className="md:w-[35%]">
            <img
              ref={imageRef}
              src={imageSrc}
              alt="John Lyon"
              className="w-full h-auto object-cover border-2 border-darkNavy"
            />
          </div>
          <div className="md:w-[60%]">
            <h1 className="font-montefiore text-5xl mb-6 text-darkNavy underline">
              OUR INSPIRATION
            </h1>
            <p ref={ref4} className={`text-lg md:text-2xl uppercase text-darkNavy font-alpina leading-relaxed mb-6 md:w-[100%] ${inView4 ? 'text-focus-in' : ''}`}>
              Lyonshare Public House pays tribute to the indomitable spirit of the Hudson Valley and the
              industrious legacy of its communities. We tip our hat to Captain John Lyon, lauded river boat
              captain and manager of the Smithsonian Hotel in the 19th century, He provided safe passage
              across the Hudson for all his passengers including the likes of Babe Ruth and Teddy
              Roosevelt—we honor his enduring legacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

