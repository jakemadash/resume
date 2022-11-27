import React from "react";
import "../style.css";

class Color extends React.Component {
  colorSwitch = (e) => {
    const coloredElements = document.querySelectorAll(".colored");
    const button = getComputedStyle(e.target);
    const selectedColor = button.getPropertyValue("background-color");
    console.log(selectedColor);
    coloredElements.forEach((element) => {
      if (element.nodeName === "DIV") {
        element.style.borderColor = selectedColor;
      } else element.style.color = selectedColor;
    });
  };

  render() {
    return (
      <div className="hidden color" onClick={this.colorSwitch}>
        <button id="gray"></button>
        <button id="red"></button>
        <button id="blue"></button>
        <button id="green"></button>
        <button id="yellow"></button>
        <button id="purple"></button>
      </div>
    );
  }
}

export default Color;
