import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import React from "react";

export default function Topbar(props) {
  const menuOpen = props.menuOpen;
  //const [navbar, setNavbar] = useState(false);

  /* const changeNavColor = () => {
    console.log("asdhgsdg");
  };

  window.addEventListener("scroll", changeNavColor);*/

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Giorgos <span className="bekas">Bekas</span>
          </a>
          <div className="itemcontainer">
            <Person className="icon" />
            <span>+30 6940666225</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon" />
            <span>giorgosbekas1995@hotmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => props.setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
