import Sidebar from "../sidebar/Sidebar";

export default function Menu(props) {
  return <Sidebar menu={props} onClick={() => props.setMenuOpen(false)} />;
}
