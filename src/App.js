import React from "react";
import Personal from "./components/Personal";
import List from "./components/List";
import Resume from "./components/Resume";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: "",
    };
  }

  stateUpdate = () => {
    const form = document.querySelector(".form");
    this.setState({ formValues: form.elements });
  };

  whatever = (e) => {
    e.preventDefault();
    this.stateUpdate();
  };

  componentDidMount() {
    this.stateUpdate();
    const targetNode = document.querySelector(".form");
    const observerOptions = {
      childList: true,
      subtree: true,
    };

    const observer = new MutationObserver(this.stateUpdate);
    observer.observe(targetNode, observerOptions);
  }

  render() {
    let resume;
    if (this.state.formValues) {
      resume = <Resume values={this.state.formValues} />;
    } else resume = null;
    return (
      <div className="container">
        <form className="form" onChange={this.whatever}>
          <Personal />
          <List label="Work History" place="jobs" />
          <List label="Education" place="schools" />
          <h3>Skills</h3>
          <textarea
            placeholder="Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. 
          Aliquip quis excepteur et nostrud enim irure nostrud officia."
          ></textarea>
          <br></br>
          <div className="save">
            <button onClick={this.whatever}>Save</button>
          </div>
        </form>
        <div className="resume">{resume}</div>
      </div>
    );
  }
}

export default App;
