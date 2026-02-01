import React from 'react';
import { eventImageList, imageList } from '../lib/data';

const PrivateEvents = () => {
  return (
    <div className="pb-24">
      {/* HERO IMAGE */}
      <div className="relative w-screen h-[500px] md:h-[750px]">
        <img
          src="/images/events/bar.webp"
          alt="Lyonshare private events"
          className="w-full h-full object-cover"
        />
      </div>

      {/* PAGE TITLE */}
      <section className="max-w-5xl mx-auto px-6 mt-12 text-center">
        <h1 className="mt-8 md:mt-20 text-7xl text-darkNavy md:mb-4=5 mb-10 underline">
          PRIVATE EVENTS
        </h1>

        <h2 className="text-3xl md:text-4xl font-bebas text-darkNavy mb-6">
          Let Lyonshare Host Your Event
        </h2>

        <p className="text-lg md:text-xl text-darkNavy leading-relaxed mb-6 font-alpina">
          We can accommodate large groups or full restaurant buyouts.
          Our team will work with you to create customized menu and bar packages
          to make your event unforgettable.
        </p>

        <div className="space-y-3 text-darkNavy font-medium">
          <p>
            <span className="font-bold font-alpina">Private or semi-private events:</span>{' '}
            <a
              href="mailto:bud@lyonsharebeacon.com"
              className="underline hover:text-darkNavy/70 font-alpina"
            >
              bud@lyonsharebeacon.com
            </a>
          </p>

          <p>
            <span className="font-bold font-alpina">Large dinner reservations (up to 14):</span>{' '}
            <a
              href="mailto:info@lyonsharebeacon.com"
              className="underline hover:text-darkNavy/70 font-alpina"
            >
              info@lyonsharebeacon.com
            </a>
          </p>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="max-w-6xl mx-auto px-5 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {eventImageList.slice(0, 9).map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={src}
                alt={`Private event ${index + 1}`}
                className="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrivateEvents;
