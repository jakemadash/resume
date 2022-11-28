/* eslint-disable no-useless-constructor */
import React from "react";
import "../style.css";

class SaveEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  smallTransition(resume, form) {
    if (resume.getAttribute("id") === "") {
      resume.setAttribute("id", "visible");
      resume.removeAttribute("z-index");
    } else resume.setAttribute("id", "");
  }

  toggleDisabled(form, resume) {
    const formElements = form.querySelectorAll("*");
    const resumeElements = resume.querySelectorAll("button");
    formElements.forEach((element) => {
      element.toggleAttribute("disabled");
      element.classList.toggle("nohover");
    });
    resumeElements.forEach((element) => {
      element.classList.toggle("nohover");
    });
  }

  transition = (e) => {
    console.log("okay");
    e.preventDefault();
    const form = document.querySelector(".form");
    const resume = document.querySelector(".resume-container");
    const edit = document.querySelector(".edit");
    const color = document.querySelector(".color");
    const style = getComputedStyle(resume);
    this.toggleDisabled(form, resume);

    if (style.getPropertyValue("position")) this.smallTransition(resume, form);
    else resume.classList.toggle("slide");

    form.classList.toggle("hidden");
    edit.classList.toggle("hidden");
    color.classList.toggle("hidden");
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
        <button onClick={this.transition} className={this.props.class}>
          {this.props.label}
        </button>
      );
  }
}

export default SaveEdit;
