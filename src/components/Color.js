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
        <button id="gray" className="nohover"></button>
        <button id="red" className="nohover"></button>
        <button id="blue" className="nohover"></button>
        <button id="green" className="nohover"></button>
        <button id="yellow" className="nohover"></button>
        <button id="purple" className="nohover"></button>
      </div>
    );
  }
}

export default Color;
