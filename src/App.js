import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import EducationAdd from "./components/EducationAdd";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      schools: [<Education />],
    };
  }
  add = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target.classList.contains("education")) {
      const newSchool = <Education />;
      this.setState({
        schools: this.state.schools.concat(newSchool),
      });
    }
  };
  render() {
    return (
      <div className="app">
        <Personal />
        <div className="education">
          <h1>Education</h1>
          {this.state.schools}
        </div>
        <button className="education" onClick={this.add}>
          Add
        </button>
      </div>
    );
  }
}

export default App;
