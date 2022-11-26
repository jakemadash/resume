import React from "react";
import Personal from "./components/Personal";
import List from "./components/List";
import Resume from "./components/Resume";
import Color from "./components/Color";
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

  collapse = (e) => {
    e.preventDefault();
    const form = document.querySelector(".form");
    const resume = document.querySelector(".resume-container");
    const edit = document.querySelector(".edit");
    const color = document.querySelector(".color");
    form.classList.toggle("hidden");
    edit.classList.toggle("hidden");
    color.classList.toggle("hidden");
    resume.classList.toggle("slide");
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
        <form className="form" onChange={this.stateUpdate}>
          <Personal />
          <List label="Work History" place="jobs" />
          <List label="Education" place="schools" />
          <h3>Skills</h3>
          <textarea
            className="skills"
            placeholder="Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. 
          Aliquip quis excepteur et nostrud enim irure nostrud officia."
          ></textarea>
          <br></br>
          <div className="save">
            <button onClick={this.collapse}>Save</button>
          </div>
        </form>
        <div className="resume-container">
          <Color />
          <div className="resume">{resume}</div>
          <button className="hidden edit">Edit</button>
        </div>
      </div>
    );
  }
}

export default App;
