import React from "react";
import uniqid from "uniqid";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      id: uniqid(),
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      id: this.state.id,
    });
  };

  render() {
    const { value } = this.state.value;
    return (
      <>
        <label htmlFor={this.props.label}></label>
        <input
          onChange={this.handleChange}
          value={value}
          type={this.props.type}
          id={this.props.label}
          placeholder={this.props.label}
          className="input"
        />
      </>
    );
  }
}

export default Input;
