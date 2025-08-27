import React from "react";
import "./Home.css";
import avatar from "../../assets/images/avatar.jpg";

export const Home = () => {
  return (
    <section id="home" >
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, It's me</strong>
        <h1>Ngan Tran</h1>
        <p>
          I am a final-year student majoring in Software Development with hands-on experience in building web applications using Java (Spring Boot), C# (.NET), VueJS, and SQL. I am passionate about learning new technologies such as AI. 
        </p>
        <a href="#summary" className="btn-link">
          Scroll for more
        </a>
      </div>
      <div className="home-img" data-aos="fade-up" >
        <div className="img-box">
          <img src={avatar} alt="avatar"></img>
          <h2>
            Ngan Tran <br /> <span>Fullstack developer </span>
          </h2>
          <div className="social">
            <a href="https://www.linkedin.com/in/kim-ngan-tran-465036301/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ngantranTMT2504" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="mailto:ttknganct@gmail.com" className="hire-me">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};
