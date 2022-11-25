import React from "react";
import Input from "./Input";

class Education extends React.Component {
  render() {
    return (
      <div className="school">
        <Input label="Institution" type="text" />
        <Input label="Degree" type="text" />
        <Input label="Subject" type="text" />
        <Input label="Start Date" type="text" />
        <Input label="End Date" type="text" />
      </div>
    );
  }
}

export default Education;
