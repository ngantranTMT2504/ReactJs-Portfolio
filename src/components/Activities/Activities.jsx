import React from "react";
import "./Activities.css";

import act1 from '../../assets/images/act1.jpg'
import act2 from '../../assets/images/act2.jpg'

const Activities = () => {
  const data = [
    {
      name: "[AI Competition] - Participated in FPT Hackathon 2025 - UNLOCK THE AI EDGE",
      link: "https://hackathon.feexp.space/",
      time: "05/2025",
    },
    {
      name: "Joined a startup project for selling products to support the Hope charity fund",
      link: "#",
      time: "05/2025",
    },
    {
      name: "[AI Competition] - Participated in FPT Hackathon 2025 - UNLOCK THE AI EDGE",
      link: "https://feexp.space/fpt-edu-hackathon",
      time: "05/2024",
    },
  ];
  return (
    <section id="activities">
      <div className="activities-heading" data-aos="fade-up">
        <h3>Activities</h3>
      </div>
      <div className="activities-content" data-aos="fade-up">
        {data.map((item) => {
          return (
            <a href={item.link} target="_blank" className="activity-link">
              <i class="fa-solid fa-trophy"></i> 
              {item.name + " (" + item.time + ")"}
            </a>
          );
        })}
      </div>
      <div className="activities-img">
        <img src={act1} alt="activities img" data-aos="fade-right"  />
        <img src={act2} alt="activities img" data-aos="fade-left" />
      </div>
    </section>
  );
};

export default Activities;
