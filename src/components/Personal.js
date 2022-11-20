import React from "react";
import Input from "./Input";

class Personal extends React.Component {
  render() {
    return (
      <div className="section">
        <h2>Personal Information</h2>
        <Input label="name" type="text" />
        <Input label="email" type="email" />
        <Input label="phone" type="tel" />
      </div>
    );
  }
}

export default Personal;
