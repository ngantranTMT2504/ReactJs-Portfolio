import "./Projects.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

import bookstore from "../../assets/images/bookstore.png";
import hotel from "../../assets/images/hotel.png";
import elearning from "../../assets/images/elearning.png";

const Projects = () => {
  const data = [
    {
      src: bookstore,
      url: "#",
    },
    {
      src: elearning,
      url: "#",
    },
    {
      src: hotel,
      url: "#",
    }
  ];
  return (
    <section id="projects" data-aos="fade-up" >
      <div className="project-heading">
        <h3>Recent Projects</h3>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.src}>
              <div className="projects-box">
                <a href={item.url}>
                  <img src={item.src} alt="project img"></img>
                  <div className="p-overplayer">
                    <strong>Outserved Reports</strong>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="github-btn">
        <a href="https://github.com/ngantranTMT2504" target="_blank" className="btn-link">
          My github <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;
