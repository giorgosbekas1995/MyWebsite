import PortofolioList from "../portofolioList/PortofolioList";
import { useEffect, useState } from "react";
import "./portofolio.scss";
import {
  frontendPortfolio,
  backendPortfolio,
  fullstackPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("frontend");
  const [selectedProject, setSeletedProject] = useState([]);
  const list = [
    {
      id: "frontend",
      title: "FrontEnd",
    },
    {
      id: "backend",
      title: "BackEnd",
    },
    {
      id: "fullstack",
      title: "FullStack",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setSeletedProject(frontendPortfolio);
        break;
      case "backend":
        setSeletedProject(backendPortfolio);
        break;
      case "fullstack":
        setSeletedProject(fullstackPortfolio);
        break;
      default:
        setSeletedProject(frontendPortfolio);
    }
  }, [selected]);

  return (
    <div className="portofolio" id="portofolio">
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortofolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="containerp">
        {selectedProject.map((data) => (
          <div className="item">
            <a href={data.link} target="_blank" rel="noreferrer">
              <img src={data.img} alt=""></img>
            </a>
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
