import React from "react";
import { useInView } from "react-intersection-observer";

const Hours = () => {

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  
  return (
    <div>
      <div className="relative w-screen h-[600px] md:h-[800px]">
        <img
          src="/images/buildingside.jpg"
          alt="boat"
          className="w-full h-full object-cover border-2 border-darkNavy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={ref}  className={`bg-white text-darkNavy border-2 border-darkNavy text-4xl md:text-6xl font-bebas font-bold px-6 py-2 shadow-lg shadow-black ${inView ? 'scale-in-hor-left' : ''}`}>
            HOURS
          </div>
        </div>
      </div>

      <div className="w-full p-10 flex flex-col lg:flex-row justify-between items-center">
        
        <div className="flex flex-col justify-center items-center text-center lg:w-1/2 p-10 h-full lg:mr-4">
          <h1 className=" text-5xl text-darkNavy mb-10 underline" >HOURS AND LOCATION</h1>
          <p className=" text-3xl text-darkNavy mb-4">KITCHEN 5-10PM</p>
          <p className=" text-3xl text-darkNavy mb-4">BAR UNTIL MIDNIGHT</p>
          <p className=" text-3xl text-darkNavy">CLOSED TUESDAYS</p>
        </div>

        <div className="lg:w-1/2 w-full max-w-4xl overflow-hidden shadow-md shadow-darkNavy mt-6 lg:mt-0 border-2 border-darkNavy h-full lg:ml-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.8924519820976!2d-73.97495402393432!3d41.50660537128497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd310075124b91%3A0x836b25f203a40726!2sLyonshare%20Public%20House!5e0!3m2!1sen!2sus!4v1733238916857!5m2!1sen!2sus"
            className="w-full h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="mr-5">
        <p className="mt-10 text-darkNavy font-alpina text-xl m-4 w-full text-center">
         For inquiries please email <a href="mailto:info@lyonsharebeacon.com" className=" hover:text-darkNavy">
            info@lyonsharebeacon.com
          </a>
        </p>
        <p className="mt-5 text-darkNavy font-alpina text-xl m-4 w-full text-center">
          <a href="tel:+18452754932" className=" hover:text-darkNavy">
            or call (845) 275-4932
          </a>
        </p>
        
      </div>

      <div className="mt-4 mb-10 text-center">
        <a
          href="https://www.google.com/maps/place/Lyonshare+Public+House"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-DarkNavy font-medium py-2 px-4 text-xl  border-2 border-darkNavy hover:bg-darkNavy hover:text-manliusLimestone transition"
        >
          GET DIRECTIONS
        </a>
      </div>

    </div>
  );
};

export default Hours;
