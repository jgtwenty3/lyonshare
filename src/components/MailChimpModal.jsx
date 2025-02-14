import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MailchimpModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white p-6 shadow-lg max-w-lg w-full relative border-8 border-darkNavy">
        <button className="absolute top-2 right-2 text-xl text-darkNavy" onClick={onClose}>
          ✖
        </button>
        <div id="mc_embed_shell">
          <div id="mc_embed_signup">
            <form
              action="https://lyonsharebeacon.us9.list-manage.com/subscribe/post?u=dc9b75138c26777e0d904d3c5&amp;id=a5af91c9f9&amp;f_id=0056c2e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_self"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2 className="text-4xl font-bold font-montefiore mb-5 text-darkNavy">KEEP IN TOUCH</h2>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL" className="font-alpina text-xl text-darkNavy">Email Address:</label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email border p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkNavy font-alpina"
                    id="mce-EMAIL"
                    required
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME" className="font-alpina text-xl text-darkNavy">First Name:</label>
                  <input
                    type="text"
                    name="FNAME"
                    className="text border-2 p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkNavy font-alpina text-darkNavy"
                    id="mce-FNAME"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME" className="font-alpina text-xl text-darkNavy">Last Name:</label>
                  <input
                    type="text"
                    name="LNAME"
                    className="text border p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkNavy font-alpina text-darkNavy"
                    id="mce-LNAME"
                  />
                </div>
                <div className="mc-field-group size1of2">
                  <label htmlFor="mce-BIRTHDAY-month" className="font-alpina text-xl text-darkNavy">Birthday:</label>
                  <div className="datefield">
                    <span className="subfield monthfield">
                      <input
                        className="birthday border p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkNavy font-alpina text-darkNavy"
                        type="text"
                        pattern="[0-9]*"
                        placeholder="MM"
                        size="2"
                        maxLength="2"
                        name="BIRTHDAY[month]"
                        id="mce-BIRTHDAY-month"
                      />
                    </span> /
                    <span className="subfield dayfield">
                      <input
                        className="birthday border p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkNavy font-alpina"
                        type="text"
                        pattern="[0-9]*"
                        placeholder="DD"
                        size="2"
                        maxLength="2"
                        name="BIRTHDAY[day]"
                        id="mce-BIRTHDAY-day"
                      />
                    </span>
                  
                  </div>
                </div>
                <div className="clear foot mt-4 flex justify-end">
                  <input
                    type="submit"
                    name="subscribe"
                    className="bg-white text-darkNavy border-2 border-darkNavy py-2 px-4 hover:bg-darkNavy hover:text-white cursor-pointer text-xl"
                    value="SUBSCRIBE"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailchimpModal;
