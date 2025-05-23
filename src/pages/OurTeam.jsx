import React from 'react';
import { HashLink } from 'react-router-hash-link';

const teamMembers = [
  {
    name: "Bud Schmeling",
    title: "Owner Operator",
    imageUrl: "/staff/bud.webp",
    link: "/about#story",  // Link to the "OUR STORY" section on the About page
  },
  {
    name: "Adam Slamon",
    title: "Executive Chef",
    imageUrl: "/staff/adam.webp",
  },
  {
    name: "Nick Merrifield",
    title: "AGM/Beverage Director",
 
    imageUrl: "/staff/nick.webp",
  },
  {
    name: "Jose Bazan",
    title: "Sous Chef",

    imageUrl: "/staff/jose.webp",
  },
  {
    name: "Claudia Clemente",
    title: "Service Manager",

    imageUrl: "/staff/claudia.webp",
  },
  {
    name: "Lindsey Guerrero",
    title: "Reservationist",

    imageUrl: "/staff/lindsey.webp",
  },
];

const OurTeam = () => {
  return (
    <div className="bg-white w-screen min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <header className=" text-darkNavy py-8 text-center">
          <h1 className="text-5xl font-bold">OUR TEAM</h1>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            member.link ? (
              <HashLink to={member.link} key={index} className="team-member">
                <div className="bg-limestone p-6 shadow-lg shadow-darkNavy hover:scale-110 border-2 border-darkNavy ">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-96 object-contain rounded-t-lg mb-4 shadow-lg"
                  />
                  <h2 className="text-3xl font-bold mb-2 text-darkNavy underline font-alpina uppercase">{member.name}</h2>
                  <h3 className="text-2xl text-darkNavy mb-2 font-alpina">{member.title}</h3>
                  
                </div>
              </HashLink>
            ) : (
              <div key={index} className="team-member bg-limestone p-6 shadow-lg shadow-darkNavy hover:scale-110 border-2 border-darkNavy ">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-96 object-contain rounded-t-lg mb-4 shadow-lg"
                />
                <h2 className="text-3xl font-bold mb-2 text-darkNavy font-alpina uppercase">{member.name}</h2>
                <h3 className="text-2xl text-darkNavy mb-2 font-alpina">{member.title}</h3>
              
              </div>
            )
          ))}
        </section>
      </main>
    </div>
  );
};

export default OurTeam;
