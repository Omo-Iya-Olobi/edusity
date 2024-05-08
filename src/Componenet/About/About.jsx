import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left" id="about">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About Institution</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our institution's
          comprehensive eduaction programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of Tech
        </p>
        <p>
          With a focus on innovative, hands-on learning, and personalised
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in the classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, software engineer, technical
          instructor, developer advocate or tech leader our diverse range of
          programs offers the perfect pathway to achieve your goals and unlock
          your full potentials in shaping the future of technology
        </p>
      </div>
    </div>
  );
};

export default About;
