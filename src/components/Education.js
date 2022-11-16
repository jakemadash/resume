import React from "react";
import Input from "./Input";

class Education extends React.Component {
  render() {
    return (
        <form>
          <Input label="institution" type="text" />
          <Input label="degree" type="text" />
          <Input label="subject" type="text" />
          <Input label="from" type="date" />
          <Input label="to" type="date" />
        </form>
    );
  }
}

export default Education;
