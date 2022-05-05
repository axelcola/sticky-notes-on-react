import { Dropdown } from "react-bootstrap";
import { CgColorBucket } from "react-icons/cg";
import "./note.css";
import Color from "./Color";

export default function ColorDropdown(props) {
  return (
    <>
      <Dropdown className={`  ${props.color} dropdown `}>
        <Dropdown.Toggle variant="none" className="drop-toggler">
          <CgColorBucket size={20} variant="none" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-target dropdown">
          <Color
            circleColor="red"
            changeColor={props.changeColor}
            currentColor={props.color === "red"}
          />
          <Color
            circleColor="orange"
            changeColor={props.changeColor}
            currentColor={props.color === "orange"}
          />
          <Color
            circleColor="yellow"
            changeColor={props.changeColor}
            currentColor={props.color === "yellow"}
          />
          <Color
            circleColor="green"
            changeColor={props.changeColor}
            currentColor={props.color === "green"}
          />
          <Color
            circleColor="turquoise"
            changeColor={props.changeColor}
            currentColor={props.color === "turquoise"}
          />
          <Color
            circleColor="blue"
            changeColor={props.changeColor}
            currentColor={props.color === "blue"}
          />
          <Color
            circleColor="dark-blue"
            changeColor={props.changeColor}
            currentColor={props.color === "dark-blue"}
          />
          <Color
            circleColor="violet"
            changeColor={props.changeColor}
            currentColor={props.color === "violet"}
          />
          <Color
            circleColor="pink"
            changeColor={props.changeColor}
            currentColor={props.color === "pink"}
          />
          <Color
            circleColor="brown"
            changeColor={props.changeColor}
            currentColor={props.color === "brown"}
          />
          <Color
            circleColor="grey"
            changeColor={props.changeColor}
            currentColor={props.color === "grey"}
          />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
