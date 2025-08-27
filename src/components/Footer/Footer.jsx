import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
         Please contact me if you want more information about me
        </p>
        <div className="social">
        <a href="https://www.facebook.com/ngan.kim.464933/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/kim-ngan-tran-465036301/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ngantranTMT2504" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.youtube.com/@LofiSerenity-fj7qm" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
