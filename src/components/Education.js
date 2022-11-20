import React from "react";
import Input from "./Input";

class Education extends React.Component {
  render() {
    return (
      <div className="section">
        <Input label="institution" type="text" />
        <Input label="degree" type="text" />
        <Input label="subject" type="text" />
        <Input label="start date" type="text" />
        <Input label="end date" type="text" />
      </div>
    );
  }
}

export default Education;
