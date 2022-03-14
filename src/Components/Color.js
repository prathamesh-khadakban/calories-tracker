import { useState } from "react";
import "./Color.css";
import logo from "../logo.svg";

const Color = () => {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const [color, setColor] = useState(getRandomColor);

  const changeColorHandler = () => setColor(getRandomColor);

  return (
    <header style={{ backgroundColor: color }} className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={changeColorHandler}>Change Color</button>
    </header>
  );
};

export default Color;
