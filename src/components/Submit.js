import React from "react";

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      id: "",
    };
  }
  whatever = (e) => {
    e.preventDefault();
    this.props.callBack("whoa");
  };
  render() {
    return <div>{this.props.value[0].value}</div>
  }
}

export default Submit;
