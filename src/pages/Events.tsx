import React from 'react';
import { useInView } from 'react-intersection-observer';
import { eventsData } from '../lib/data';
import ArtistCard from "../components/ArtistCard";

const Events = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const today = new Date();
  const upcomingEvents = eventsData
    .filter(event => new Date(event.date) >= today)
    .sort((a,b)=> new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const upNextEvent = upcomingEvents[0];


  // Convert date strings to Date objects and then get time values for comparison
  // Get the next upcoming event

  return (
    <div className="bg-white min-h-screen">
      <header className="text-center py-8">
        <h1 className="text-5xl md:text-6xl font-bold mt-8 md:mt-20 uppercase">Upcoming Events</h1>
      </header>

      <section className="py-8">
        <h2 className="text-4xl font-bold text-center mb-4 uppercase">Up Next</h2>
        {upNextEvent && (
          <div className="w-full">
            <div className="ml-10 mr-10 mb-5">
              <ArtistCard
                artist={upNextEvent.artist}
                date={upNextEvent.date}
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
        <h2 className="text-4xl font-bold text-center mb-4 uppercase">Upcoming Events</h2>
        <div className="flex flex-col">
          {upcomingEvents.slice(1).map((event, index) => (
            <div key={index} className="ml-10 mr-10 mb-5">
              <ArtistCard
                artist={event.artist}
                date={event.date}
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
