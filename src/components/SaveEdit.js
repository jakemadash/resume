/* eslint-disable no-useless-constructor */
import React from "react";
import "../style.css";

class SaveEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  smallTransition(resume) {
    const style = getComputedStyle(resume);
    if (style.getPropertyValue("opacity")) {
      if (resume.getAttribute("id") === "")
        resume.setAttribute("id", "visible");
      else resume.setAttribute("id", "");
    }
  }

  transition = (e) => {
    e.preventDefault();
    const form = document.querySelector(".form");
    const formElements = document.querySelectorAll(".form *");
    const resume = document.querySelector(".resume-container");
    const edit = document.querySelector(".edit");
    const color = document.querySelector(".color");
    this.smallTransition(resume);
    form.classList.toggle("hidden");
    formElements.forEach((element) => {
      element.toggleAttribute("disabled");
    });
    edit.classList.toggle("hidden");
    color.classList.toggle("hidden");
    resume.classList.toggle("slide");
  };

  render() {
    // save button
    if (this.props.class === "save") {
      return (
        <div className={this.props.class}>
          <button onClick={this.transition}>{this.props.label}</button>
        </div>
      );
    }
    // edit button
    else
      return (
        <button className={this.props.class} onClick={this.transition}>
          {this.props.label}
        </button>
      );
  }
}

export default SaveEdit;
