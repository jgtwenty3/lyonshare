import React from 'react';
import { useInView } from 'react-intersection-observer';

const MenuList = ({ menuSection }) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="px-4 flex flex-col items-center">
      <div className="mb-10 text-darkNavy flex flex-col items-center w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-alpina ">{menuSection.title}</h2>
        <ul className="space-y-4">
          {menuSection.items.map((item, itemIndex) => (
            <li ref={sectionRef} key={itemIndex} className={`text-lg font-alpina`}>
              <span className="font-bold text-2xl ">{item.name} <span className=" text-xl ml-2">{item.ingredients}</span></span>
              {item.ingredients && (
                <>
                  <br />
                  
                </>
              )}
              {item.items && (
                <ul className="space-y-2 mt-4">
                  {item.items.map((subItem, subItemIndex) => {
                    const { ref: subItemRef, inView: subItemInView } = useInView({
                      threshold: 0.1,
                      triggerOnce: true,
                    });

                    return (
                      <li ref={subItemRef} key={subItemIndex}>
                        <span className="font-bold">{subItem.name}</span>
                        <br />
                        <span className="ml-2">{subItem.ingredients}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
