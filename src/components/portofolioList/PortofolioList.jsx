import "./portofolioList.scss";

export default function PortofolioList(props) {
  return (
    <li
      className={props.active ? "portofolioList active" : "portofolioList"}
      onClick={() => props.setSelected(props.id)}
    >
      {props.title}
    </li>
  );
}
