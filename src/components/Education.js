import React from "react";
import Input from "./Input";

class Education extends React.Component {
  render() {
    return (
      <div className="section">
          <Input label="institution" type="text" />
          <Input label="degree" type="text" />
          <Input label="subject" type="text" />
          from: <Input label="from" type="date" />
          to: <Input label="to" type="date" />
      </div>
    );
  }
}

export default Education;
