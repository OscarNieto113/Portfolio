import React from "react";
import Slider from "react-slick";
import { Skill } from "../data/skills"; // Import your skill data

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillCarousel = ({ skills }) => { // Remove the ":Skills" after skills
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="skill-carousel">
      <Slider {...settings}>
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon">
              <skill.Icon />
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <p>{skill.time} years</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillCarousel;