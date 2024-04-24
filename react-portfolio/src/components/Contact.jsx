import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <div className="absolute top-1/4 mt-6 left-1/4 right-1/4 item-center">
      <ContactForm />
      <div id="contact"></div>
    </div>
  );
};

export default Contact;


