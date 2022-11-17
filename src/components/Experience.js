import React from "react";
import Input from "./Input";

class Experience extends React.Component {
  render() {
    return (
      <form>
        <Input label="company" type="text" />
        <Input label="position" type="text" />
        <Input label="from" type="date" />
        <Input label="to" type="date" />
        <textarea placeholder="job duties"></textarea>
      </form>
    );
  }
}

export default Experience;
