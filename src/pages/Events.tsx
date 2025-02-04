import React from 'react';
import { useInView } from 'react-intersection-observer';
import { eventsData } from '../lib/data';
import ArtistCard from "../components/ArtistCard";

const Events = () => {
  const today = new Date();
  console.log('Today:', today);

  const upcomingEvents = eventsData
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const upNextEvent = upcomingEvents[0];
  console.log('Up Next Event:', upNextEvent);

  return (
    <div className="bg-white min-h-screen">
      <header className="text-center py-8">
        <h1 className="text-5xl md:text-7xl font-bold mt-10 md:mt-20 uppercase text-darkNavy underline">Upcoming Events</h1>
      </header>

      <section className="py-8">
        <h2 className="text-5xl font-bold text-center mb-4 uppercase text-darkNavy">Next Up</h2>
        {upNextEvent && (
          <div className="w-full">
            <div className="ml-10 mr-10 mb-5 rounded-t-lg ">
              <ArtistCard
                artist={upNextEvent.artist}
                date={new Date(upNextEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                img={upNextEvent.img}
                bio={upNextEvent.bio}
                reverse={false}
                fullWidth={true}
              />
            </div>
          </div>
        )}
      </section>

      <section className="py-8">
        <h2 className="text-4xl font-bold text-center mb-4 uppercase text-darkNavy">THIS MONTH</h2>
        <div className="flex flex-col">
          {upcomingEvents.slice(1).map((event, index) => (
            <div key={index} className="ml-10 mr-10 mb-5 rounded-t-lg">
              <ArtistCard
                artist={event.artist}
                date={new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                img={event.img}
                bio={event.bio}
                reverse={index % 2 !== 0}
                fullWidth={true}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
