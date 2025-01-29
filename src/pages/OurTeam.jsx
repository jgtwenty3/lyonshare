import React from 'react';

const teamMembers = [
  {
    name: "Bud Schemling",
    title: "Owner Operator",
    bio: "A short bio about team member 1.",
    imageUrl: "/path/to/image1.jpg",
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
    bio: "A short bio about team member 2.",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    name: "Jose Bazan",
    title: "Sous Chef",
    bio: "A short bio about team member 2.",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    name: "Claudia Clemente",
    title: "Service Manager",
    bio: "A short bio about team member 2.",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    name: "Lindsey Guerrero",
    title: "Concierge",
    bio: "A short bio about team member 2.",
    imageUrl: "/path/to/image2.jpg",
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
            <div key={index} className="team-member bg-limestone p-6 shadow-lg">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
              <h3 className="text-2xl text-darkNavy mb-2">{member.title}</h3>
              <p className="text-darkNavy font-alpina">{member.bio}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default OurTeam;
