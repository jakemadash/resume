import React from "react";
import ResumeEducation from "./ResumeEducation";

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const propsArray = [...this.props.values];
    const [name, title, email, phone, about] = propsArray;
    const schools = document.querySelectorAll(".school");
    const jobs = document.querySelectorAll(".job");
    console.log(this.props);
    return (
      <div>
        <h1>{name.value || name.placeholder}</h1>
        <ResumeEducation schools={schools} />
      </div>
    );
  }
}

export default Resume;
