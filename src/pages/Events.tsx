import React from 'react'
import { useInView } from 'react-intersection-observer';

const Events = () => {

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div>
      <div className="relative w-screen h-[600px] md:h-[800px]">
        <img
          src="/images/background.jpeg"
          alt="boat"
          className="w-full h-full object-cover border-2 border-darkNavy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={ref} className={`bg-white text-darkNavy border-2 border-darkNavy text-4xl md:text-6xl font-bebas font-bold px-6 py-2 shadow-lg shadow-black ${inView ? 'scale-in-hor-left' : ''}`}>
            EVENTS
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-5xl text-center mt-2'>UPCOMING EVENTS</h1>
      </div>
    </div>
  )
}

export default Events