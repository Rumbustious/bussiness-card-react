import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChessKnight } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import myPicture from "./assets/ahmed-shazly2.jpg";

export default function App() {
  return (
    <>
      <img src={myPicture} alt="my personal picture" className="personal-img" />
      <h1>Ahmed Shazly</h1>
      <h4>Frontend Developer</h4>
      <address className="contact">
        <a className="mail"
        href="mailto:rumbustious0@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/ahmed-shazly-486a33234/"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </address>
      <section className="custom-scrollbars__content">
        <h3>About</h3>
        <p>
          I am an Engneering student having the dream of becoming a great
          Computer Engineer. Currently styding at Aswan University and I am a
          STEM schools graduate.
        </p>
        <h3>Interests</h3>
        <p>
          I love doing coding (like any other programmer) specially with
          JavaScript. I play chess in my spare time and I've reached 2100 on
          Lichess.org
        </p>
      </section>
      <div className="social">
        <a href="https://www.facebook.com/ahmed.shazly.9216778/">
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
        <a href="https://github.com/Rumbustious">
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a href="https://lichess.org/@/Rumbustious0">
          <FontAwesomeIcon icon={faChessKnight} />
        </a>
      </div>
    </>
  );
}
