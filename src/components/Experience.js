import React from "react";
import Input from "./Input";

class Experience extends React.Component {
  render() {
    return (
      <div className="job">
        <Input label="Company" type="text" />
        <Input label="Position" type="text" />
        <textarea placeholder="Job Duties"></textarea>
        <div>
          <Input label="Start Date" type="text" />
          <Input label=" End Date" type="text" />
        </div>
      </div>
    );
  }
}

export default Experience;
