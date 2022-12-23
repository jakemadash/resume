import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state.value;
    return (
      <>
        <label htmlFor={this.props.label.replace(/\s+/g, '')}></label>
        <input
          onChange={this.handleChange}
          value={value}
          type={this.props.type}
          id={this.props.label.replace(/\s+/g, '')}
          placeholder={this.props.label}
          className="input"
        />
      </>
    );
  }
}

export default Input;
