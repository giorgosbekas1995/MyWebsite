import Wave from "react-wavify";
import "./style.scss";
import MyPdf from "../../GiorgosBekas.pdf";

export default function About() {
  return (
    <section id="about" className="sectioncontainer">
      <div className="aboutme">
        <h2>About me</h2>
        <h4>
          Hello, I am Giorgos Bekas and I recently graduated. I spend most of my
          day, experimenting with HTML, CSS and JavaScript frameworks React and
          Node js. I enjoy coding and the challenge of learning something new
          everyday.
        </h4>
        <a href={MyPdf} download>
          Download CV
        </a>
      </div>
      <div className="Waves">
        <Wave
          className="wave1"
          fill="#F0FFFF"
          paused={false}
          options={{
            height: 0,
            amplitude: 20,
            speed: 0.25,
            points: 9,
          }}
        />
        <Wave
          className="wave2"
          fill="#C0FFFF"
          paused={false}
          options={{
            height: 0,
            amplitude: 20,
            speed: 0.25,
            points: 9,
          }}
        />
        <Wave
          className="wave3"
          fill="#A0FFFF"
          paused={false}
          options={{
            height: 50,
            amplitude: 20,
            speed: 0.25,
            points: 9,
          }}
        />
      </div>
    </section>
  );
}
