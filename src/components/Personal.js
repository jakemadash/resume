import React from "react";
import Input from "./Input";

class Personal extends React.Component {
  render() {
    return (
      <div className="personal">
        <h3>Personal Information</h3>
        <Input label="Full Name" type="text" />
        <Input label='Title' type='text' />
        <Input label="Email" type="email" />
        <Input label="Phone" type="tel" />
        <Input label='Website' type='text' />
        <textarea placeholder="Skills"></textarea>
        <textarea placeholder="About"></textarea>
      </div>
    );
  }
}

export default Personal;
