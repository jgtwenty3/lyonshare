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
              gsap.to(imageRef.current, { opacity: 1, duration: 1 });
            },
          });
        });
      },
    });

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
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <div className="md:w-[60%]">
            <h1 className="font-montefiore text-5xl mb-6 text-darkNavy underline">
              OUR STORY
            </h1>
            <p className="text-lg text-darkNavy font-alpina leading-relaxed mb-6">
              LyonShare Beacon represents the culminating vision of
              owner Bud Schmeling's decades-long journey helming
              some of the most iconic establishments in NYC. Black
              Betty, Peter Luger, and Gage & Tollner to name a few; this
              new venture will showcase his passion for hospitality and
              promises to be a feast for the senses.
            </p>
            <p className="text-lg text-darkNavy font-alpina leading-relaxed mb-6">
              We've assembled a talented and dedicated team, focused
              on quality, execution, and elevated service that caters to
              the desires of our community and provides an exhilarating
              experience for all.
            </p>
            <p className="text-lg text-darkNavy font-alpina leading-relaxed mb-6">
              Lyonshare Public House is a classic American bistro in an
              historic building, right in the heart of Main Street. We're
              excited to welcome you in to gather with friends, make new
              acquaintances and pass some time in this labor of love.
            </p>
          </div>
          <div className="md:w-[35%]">
            <img
              src="/images/bud.webp"
              alt="Our Story"
              className="w-full h-auto object-cover border-2 border-darkNavy"
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
              className="w-full h-auto object-cover border-2 border-barnishedBrass bg-darkNavy p-5"
            />
          </div>
          <div className="md:w-[60%]">
            <h1 className="font-montefiore text-5xl mb-6 text-darkNavy underline">
              OUR INSPIRATION
            </h1>
            <p className="text-lg text-darkNavy font-alpina leading-relaxed mb-6 md:w-[100%]">
              Lyonshare Public House, in the heart of Beacon, NY, pays tribute to Hudson Valley's spirit and the legendary John Lyon,
              known for his resilience and connection to the Hudson River. With a modern take on classic American bistro fare and crafted drinks, we celebrate the region's authenticity and charm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
