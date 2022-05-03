import { Dropdown } from "react-bootstrap";
import { CgColorBucket } from "react-icons/cg";
import "./note.css";
import Color from "./Color";

export default function ColorDropdown(props) {
  return (
    <>
      <Dropdown className={`button  ${props.color} dropdown `}>
        <Dropdown.Toggle variant="none" className="drop-toggler">
          <CgColorBucket />
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
            circleColor="grey last-item"
            changeColor={props.changeColor}
            currentColor={props.color === "grey last-item"}
          />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
{
  /* <Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="red"
>
  <div className="circle red" onClick={props.changeColor} id="red" />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="orange"
>
  <div
    className="circle orange"
    onClick={props.changeColor}
    id="orange"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="yellow"
>
  <div
    className="circle yellow"
    onClick={props.changeColor}
    id="yellow"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="green"
>
  <div
    className="circle green"
    onClick={props.changeColor}
    id="green"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="turquoise"
>
  <div
    className="circle turquoise"
    onClick={props.changeColor}
    id="turquoise"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="blue"
>
  <div
    className="circle blue"
    onClick={props.changeColor}
    id="blue"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="dark-blue"
>
  <div
    className="circle dark-blue"
    onClick={props.changeColor}
    id="dark-blue"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="violet"
>
  <div
    className="circle violet"
    onClick={props.changeColor}
    id="violet"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="pink"
>
  <div
    className="circle pink"
    onClick={props.changeColor}
    id="pink"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item"
  onClick={props.changeColor}
  id="brown"
>
  <div
    className="circle brown"
    onClick={props.changeColor}
    id="brown"
  />
</Dropdown.Item>
<Dropdown.Item
  className="drop-item last-item"
  onClick={props.changeColor}
  id="grey"
>
  <div
    className="circle grey"
    onClick={props.changeColor}
    id="grey"
  />
</Dropdown.Item> */
}
