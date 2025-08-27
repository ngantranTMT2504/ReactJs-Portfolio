import React from "react";
import "./Education.css";

import fpoly from "../../assets/images/fpoly.jpg";
const Education = () => {
  const data = [
    {
      school: "FPT Polytechnic Can Tho",
      img: fpoly,
      year: "12/2023 - 12/2025",
      major: "Software Development",
      gpa: "3.93/4",
      achievement: "Top 50 excellent students for 2 consecutive semesters",
    },
  ];
  return (
    <section id="education">
      <div className="education-heading">
        <h3>Education</h3>
      </div>
      <div className="education-container" data-aos="fade-up" >
        <div className="education-content">
          {data.map((item) => {
            return (
              <div className="school" key={item.school}>
                <div className="title">
                  <p className="name">{item.school}</p>
                  <p className="year">{item.year}</p>
                </div>
                <p className="major">{item.major}</p>
                <p className="gpa">GPA: {item.gpa}</p>
                <p className="achievement">
                    <i class="fa-solid fa-medal"></i> 
                    {item.achievement}
                </p>

                <div className="img-education">
                  <img src={item.img} alt="school img" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
