import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up">
      <strong>what's next</strong>
      <h3>Let's Work Together</h3>
      <p>
        I'm always open to new opportunities, exciting projects, or meaningful
        collaborations. If you're looking for a responsible and creative
        developer who enjoys problem-solving and teamwork, feel free to reach
        out. Let’s create something amazing together!
      </p>
      <a href="mailto:ttknganct@gmail.com" className="btn-link contact">
        send me an email
        <i class="fa-solid fa-envelope"></i>
      </a>
    </section>
  );
};

export default Contact;
