import React from "react";
import Input from "./Input";

class Experience extends React.Component {
  render() {
    return (
      <div className="job">
        <Input label="Company" type="text" />
        <Input label="Position" type="text" />
        <textarea placeholder="Job Duties" id='JobDuties'></textarea>
        <Input label="Start Date" type="text" />
        <Input label="End Date" type="text" />
      </div>
    );
  }
}

export default Experience;
