import React from "react";

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const propsArray = [...this.props.values];
    const [name, title, email, phone, about, ] = propsArray;
    console.log(this.props);
    return (
      <div>
        <h1>{name.value || name.placeholder}</h1>
      </div>
    );
  }
}

export default Resume;
