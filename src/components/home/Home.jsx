import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 10000,
      strings: ["Welcome!"],
    });
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="left">
        <ul className="social-icons">
          <div className="line"></div>
          <h2>
            I'm Giorgos, <span ref={textRef} className="welcome"></span>
          </h2>
          <h4>Recently Graduated, Interested in FullStack/Web Development.</h4>
          <a href="#contact" className="btn">
            Contact me
          </a>
          <div className="list">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/giorgos.bekas.9/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/giorgosbekas1995"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/george.bek95/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/giorgos-bekas-552086220/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img alt="" />
        </div>
      </div>
    </div>
  );
}
