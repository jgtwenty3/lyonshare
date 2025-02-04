import React from "react";

const Shop = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/your-hero-image.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-darkNavy p-4 uppercase underline">Merch coming soon...</h1>
      </section>

      {/* Centered Gift Card Section (Clickable) */}
      <section className="flex flex-col items-center mt-[-100px]">
        <a 
          href="https://www.toasttab.com/the-melville-47-east-main-street/giftcards" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border-2 border-darkNavy p-6 text-center w-[350px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="border-2 border-darkNavy uppercase text-darkNavy p-4 shadow-lg shadow-darkNavy">
            <h2 className="text-4xl mb-2">246 Main Street</h2>
            <p className="text-6xl">Lyonshare</p>
            <p className="text-3xl mb-2">Public House</p>
            <p className="text-4xl">Beacon, NY 12508</p>
          </div>
          {/* <img src="/images/giftcard.svg" alt="Gift Card" className="w-full h-64 object-contain rounded-md" /> */}
          <h3 className="text-3xl font-semibold font-alpina mt-5 text-darkNavy">GIFT CARD</h3>
        </a>
      </section>
    </div>
  );
};

export default Shop;
