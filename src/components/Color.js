import React from "react";
import "../style.css";

class Color extends React.Component {
  colorSwitch = (e) => {
    // don't change color if container div clicked instead of button
    if (e.target.nodeName === "BUTTON") {
      const coloredElements = document.querySelectorAll(".colored");
      const button = getComputedStyle(e.target);
      const selectedColor = button.getPropertyValue("background-color");
      coloredElements.forEach((element) => {
        // header line
        if (element.nodeName === "DIV")
          element.style.borderColor = selectedColor;
        // text
        else element.style.color = selectedColor;
      });
    }
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
