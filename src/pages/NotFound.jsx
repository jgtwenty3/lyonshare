import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import johnny from "/images/johnny.svg";
import arm from "/images/arm.svg";

const NotFound = () => {
  const container = useRef(null);
  const johnnyRef1 = useRef(null);
  const armRef1 = useRef(null);
  const johnnyRef2 = useRef(null);
  const armRef2 = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // First Johnny (Right Side)
      tl.fromTo(
        johnnyRef1.current,
        { x: "100vw" },
        { x: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          armRef1.current,
          { y: "100vh", rotation: -80 },
          { y: 0, rotation: 45, duration: 1, ease: "power3.out" },
          "-=0.5"
        )

        // Second Johnny (Left Side)
        .fromTo(
          johnnyRef2.current,
          { x: "-100vw" },
          { x: 0, duration: 1, ease: "power3.out" },
          "+=0.5"
        )
        .fromTo(
          armRef2.current,
          { y: "100vh", rotation: 80 },
          { y: 0, rotation: 130, duration: 1, ease: "power3.out" },
          "-=0.5"
        )

        // Button animation
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative flex flex-col items-center justify-center h-screen bg-background text-foreground p-6 overflow-hidden"
    >
      <div className="text-center z-10">
        <h1 className="text-9xl font-bold mb-4 text-darkNavy mt-20">
          WRONG WAY
        </h1>

        <p className="text-4xl mb-8 uppercase text-darkNavy">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link to="/">
          <button
            ref={buttonRef}
            className="bg-white text-darkNavy border-2 border-darkNavy hover:bg-darkNavy hover:text-white py-2 px-4 rounded-none transition duration-200 text-xl"
          >
            GO BACK HOME
          </button>
        </Link>
      </div>

      {/* Animated Characters */}
      <img
        src={johnny}
        alt="Johnny"
        ref={johnnyRef1}
        className="absolute bottom-10 -right-24 w-[35%] max-w-none md:w-[30%]"
      />

      <img
        src={arm}
        alt="Arm pointing"
        ref={armRef1}
        className="hidden md:block absolute bottom-16 w-[28%] right-64 opacity-90"
      />

      <img
        src={johnny}
        alt="Johnny"
        ref={johnnyRef2}
        className="absolute bottom-10 -left-24 w-[35%] max-w-none md:w-[30%] scale-x-[-1]"
      />

      <img
        src={arm}
        alt="Arm pointing"
        ref={armRef2}
        className="hidden md:block absolute bottom-16 w-[28%] left-64 opacity-90 scale-x-[-1] -rotate-45"
      />
    </div>
  );
};

export default NotFound;