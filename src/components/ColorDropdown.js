import { Dropdown } from "react-bootstrap";
import { CgColorBucket } from "react-icons/cg";
import "./note.css";

export default function ColorDropdown(props) {
  return (
    <>
      <Dropdown className={`button  ${props.color} dropdown `}>
        <Dropdown.Toggle variant="none">
          <CgColorBucket />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-target dropdown">
          <Dropdown.Item
            className="drop-item"
            onClick={props.changeColor}
            id="green"
          >
            <div
              className="squere green"
              onClick={props.changeColor}
              id="green"
            />
          </Dropdown.Item>
          <Dropdown.Item
            className="drop-item"
            onClick={props.changeColor}
            id="yellow"
          >
            <div
              className="squere yellow"
              onClick={props.changeColor}
              id="yellow"
            />
          </Dropdown.Item>
          <Dropdown.Item
            className="drop-item"
            onClick={props.changeColor}
            id="red"
          >
            <div className="squere red" onClick={props.changeColor} id="red" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
