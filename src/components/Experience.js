import React from "react";
import Input from "./Input";

class Experience extends React.Component {
  render() {
    return (
      <div className="section">
        <Input label="company" type="text" />
        <Input label="position" type="text" />
        <Input label="start date" type="text" />
        <Input label="end date" type="text" />
        <textarea placeholder="job duties"></textarea>
      </div>
    );
  }
}

export default Experience;
