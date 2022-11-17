import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import List from "./components/EducationList";
import uniqid from "uniqid";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      schools: [{ school: <Education />, id: uniqid() }],
      jobs: [{ job: <Experience />, id: uniqid() }],
    };
  }
  //   add = (e) => {
  //     e.preventDefault();
  //     if (e.target.classList.contains("education")) {
  //       const newSchool = { school: <Education />, id: uniqid() };
  //       this.setState({
  //         schools: this.state.schools.concat(newSchool),
  //       });
  //     }
  //   }
  // }
  //   remove(school, e) {
  //     console.log(e, school);
  //     e.preventDefault();
  //     if (e.target.classList.contains("education")) {
  //       this.setState({
  //         schools: this.state.schools.filter((s) => s.id !== school.id),
  //       });
  //     }
  //   }
  render() {
    return (
      <div className="app">
        <Personal />
        <List label="Education" place="schools" />
        <List label="Work History" place="jobs" />
        {/* <div className="education">
          <h1>Education</h1>
          <div>
            {this.state.schools.map((school) => {
              return (
                <div key={school.id}>
                  {school.school}{" "}
                  <button
                    className="education"
                    onClick={(e) => this.remove(school, e)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <button className="education" onClick={this.add}>
          Add
        </button> */}
      </div>
    );
  }
}

export default App;
