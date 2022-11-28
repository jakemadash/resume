import React from "react";
import Personal from "./components/Personal";
import List from "./components/List";
import Resume from "./components/Resume";
import SaveEdit from "./components/SaveEdit";
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

  componentDidMount() {
    // reset state with loaded form values, monitor DOM changes
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
    // make sure form values have loaded to feed into resume
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
          <SaveEdit class="save" label="Save" />
        </form>

        <div className="resume-container stacked" id="">
          <Color />
          <div className="resume">{resume}</div>
          <SaveEdit class="edit hidden nohover" label="Edit" state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
