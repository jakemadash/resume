import React from "react";
import Input from "./Input";

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <h1>{this.props.title}</h1>
        <form>
          <Input label="name" type="text" />
          <Input label="email" type="email" />
          <Input label="phone" type="tel" />
        </form>
      </div>
    );
  }
}

export default Section;
