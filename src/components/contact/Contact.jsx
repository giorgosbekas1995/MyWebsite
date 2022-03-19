import "./contact.scss";
import emailjs from "emailjs-com";
import { Phone, Mail } from "@material-ui/icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4l6wlk",
        "template_4fol2pa",
        e.target,
        "user_Qonqwm1Uhh2GPgZMW1BQ3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="container">
      <div className="sidecontact">
        <div className="info">
          <h2>Contact Info</h2>
          <div className="mailcontainer">
            <Mail className="mail" />
            <span className="m">giorgosbekas1995@hotmail.com</span>
          </div>
          <div className="phonecontainer">
            <Phone className="phone" />
            <span className="p">+30 6940666225</span>
          </div>
        </div>
        <div className="socialmedia">
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
      </div>
      <div className="contact" id="contact">
        <form onSubmit={sendEmail}>
          <h2>Contact me</h2>
          <div className="changedirection">
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="useremail" placeholder="Email" required />
          </div>
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
