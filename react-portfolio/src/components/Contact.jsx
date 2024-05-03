import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm"
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <div className="absolute top-1/4 mt-6 left-1/4 right-1/4 items-center text-center">
      <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Thank you for your interest!",
                2000, 
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
      <ContactForm />
      <div id="contact"></div>
    </div>
  );
};

export default Contact;


