import React from "react";
import Input from "./Input";

class Experience extends React.Component {
  render() {
    return (
      <form>
        <Input label="company" type="text" />
        <Input label="position" type="text" />
        from: <Input label="from" type="date" />
        to: <Input label="to" type="date" />
        <textarea placeholder="job duties"></textarea>
      </form>
    );
  }
}

export default Experience;
