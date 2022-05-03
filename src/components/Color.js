import { Dropdown } from "react-bootstrap";

export default function Color(props) {
  return (
    <>
      <Dropdown.Item
        className="drop-item"
        onClick={props.changeColor}
        id={props.circleColor}
      >
        <div
          className={` ${props.circleColor} ${
            props.currentColor ? "selected" : "circle"
          } `}
          onClick={props.changeColor}
          id={props.circleColor}
        />
      </Dropdown.Item>
    </>
  );
}
