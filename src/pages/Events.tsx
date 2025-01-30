import React from 'react'
import { useInView } from 'react-intersection-observer';

const Events = () => {

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div className="bg-white w-screen min-h-screen">
   
    </div>
  )
}

export default Events