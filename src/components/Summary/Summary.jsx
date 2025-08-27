import React from "react";
import "./Summary.css";
import CV from "../../assets/cv/cv.pdf";

const Summary = () => {
  return (
    <section id="summary">
      <div className="summary-heading" data-aos="fade-up">
        <strong>My Skill</strong>
        <h2>I have built a solid foundation in programming.</h2>
        <a href={CV} download className="btn-link">
          Get my CV 
          <i class="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="summary-details" data-aos="fade-up">
        <p>
          I take pride in being responsible, hard-working, and having strong
          teamwork and problem-solving skills. I am also confident in my ability
          to communicate in English, which helps me collaborate effectively in
          an international environment. Beyond coding, I can use GitHub for
          version control, deploy websites, and work with AWS at a basic level.
          My goal is to become a Fullstack Developer and eventually grow into a
          Project Manager, where I can combine both technical expertise and
          leadership skills to deliver impactful projects.
        </p>
      </div>
    </section>
  );
};

export default Summary;
