import React from 'react';
import { HashLink } from 'react-router-hash-link';

const teamMembers = [
  {
    name: "Bud Schemling",
    title: "Owner Operator",
    bio: "A short bio about team member 1.",
    imageUrl: "/images/bud.webp",
    link: "/about#story",  // Link to the "OUR STORY" section on the About page
  },
  {
    name: "Chef Adam",
    title: "Executive Chef",
    bio: "A short bio about team member 2.",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    name: "Nick Merrifield",
    title: "AGM/Beverage Director",
    bio: "A short bio about team member 3.",
    imageUrl: "/path/to/image3.jpg",
  },
  {
    name: "Jose Bazan",
    title: "Sous Chef",
    bio: "A short bio about team member 4.",
    imageUrl: "/path/to/image4.jpg",
  },
  {
    name: "Claudia Clemente",
    title: "Service Manager",
    bio: "A short bio about team member 5.",
    imageUrl: "/path/to/image5.jpg",
  },
  {
    name: "Lindsey Guerrero",
    title: "Concierge",
    bio: "A short bio about team member 6.",
    imageUrl: "/path/to/image6.jpg",
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
                <div className="bg-limestone p-6 shadow-xl hover:scale-110">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-96 object-cover rounded-t-lg mb-4"
                  />
                  <h2 className="text-4xl font-bold mb-2 text-darkNavy underline">{member.name}</h2>
                  <h3 className="text-2xl text-darkNavy mb-2">{member.title}</h3>
                  <p className="text-darkNavy font-alpina">{member.bio}</p>
                </div>
              </HashLink>
            ) : (
              <div key={index} className="team-member bg-limestone p-6 shadow-xl hover:scale-110">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-96 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-4xl font-bold mb-2 text-darkNavy underline">{member.name}</h2>
                <h3 className="text-2xl text-darkNavy mb-2">{member.title}</h3>
                <p className="text-darkNavy font-alpina">{member.bio}</p>
              </div>
            )
          ))}
        </section>
      </main>
    </div>
  );
};

export default OurTeam;
