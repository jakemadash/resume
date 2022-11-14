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
      <form>
        <Input label='name' type='text' />
      </form>
    )
  }
}

export default App;
