import React from "react";
import Input from "./components/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: { number: 1, text: "" },
      tasks: [],
    };
  }
  render() {
    return (
      <div className="personal">
        <h1>Personal Information</h1>
        <form>
          <Input label="name" type="text" />
          <Input label="email" type="email" />
          <Input label="phone" type="tel" />
        </form>
      </div>
    );
  }
}

export default App;
