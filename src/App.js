import React from "react";
import Personal from "./components/Personal";
import List from "./components/List";
import Submit from "./components/Submit";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: "",
      values: [{ value: "" }],
    };
  }
  callBack = (componentData) => {
    this.setState({ values: componentData });
  };

  whatever = (e) => {
    e.preventDefault();
    const form = document.querySelector(".form");
    this.setState({ values: form.elements });
  };
  render() {
    return (
      <div className="container">
        <form className="form" onChange={this.whatever}>
          <Personal />
          <List label="Education" place="schools" />
          <List label="Work History" place="jobs" />
          <Submit value={this.state.values} />
          <h3>Skills</h3>
          <textarea placeholder="Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia."></textarea>
          <br></br>
          <div class="save">
            <button onClick={this.whatever}>Save</button>
          </div>
        </form>
        <div className="resume"></div>
      </div>
    );
  }
}

export default App;
