import React from "react";

const Shop = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/your-hero-image.jpg')" }}
      >
        <h2 className="text-5xl font-bold text-darkNavy p-4 uppercase">Merch coming soon...</h2>
      </section>

      {/* Centered Gift Card Section (Clickable) */}
      <section className="flex flex-col items-center mt-[-100px]">
        <a 
          href="https://www.toasttab.com/the-melville-47-east-main-street/giftcards" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-darkNavy p-6 shadow-xl text-center w-[350px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img src="/images/giftcard.svg" alt="Gift Card" className="w-full h-64 object-contain rounded-md" />
          <h3 className="text-xl font-semibold mt-4 font-alpina">GIFT CARD</h3>
        </a>
      </section>
    </div>
  );
};

export default Shop;
