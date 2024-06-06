import React from "react";
import ContactSection from "../../components/Home/ContactSection";

const ContactPage = () => {
  return (
    <div> 
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.1925856552994!2d89.38323997143115!3d25.12917908531144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fce30181d9b5b7%3A0x25e2a4b545afbf60!2sRasel%20seed%20com.pvt.ltd!5e0!3m2!1sbn!2sbd!4v1717690608746!5m2!1sbn!2sbd"
        className="w-full h-[600px]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <ContactSection/>
    </div>
  );
};

export default ContactPage;
