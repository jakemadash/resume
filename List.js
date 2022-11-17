import React from "react";
import uniqid from "uniqid";
import Education from "./Education";
import Experience from "./Experience";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [{ school: <Education />, id: uniqid() }],
      jobs: [{ job: <Experience />, id: uniqid() }],
    };
  }
  add = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("Education")) {
      const newSchool = { school: <Education />, id: uniqid() };
      this.setState({
        schools: this.state.schools.concat(newSchool),
      });
    } else {
      const newJob = { school: <Experience />, id: uniqid() };
      this.setState({
        schools: this.state.jobs.concat(newJob),
      });
    }
  };
  remove(place, e) {
    e.preventDefault();
    if (e.target.classList.contains("Education")) {
      this.setState({
        schools: this.state.schools.filter((s) => s.id !== place.id),
      });
    } else {
      this.setState({
        jobs: this.state.jobs.filter((j) => j.id !== place.id),
      });
    }
  }
  render() {
    let places = "";
    if (this.props.place === "schools") {
      places = this.state.schools;
    } else places = this.state.jobs;
    return (
      <>
        <div className={this.props.label}>
          <h1>{this.props.label}</h1>
          <div>
            {places.map((place) => {
              return (
                <div key={place.id}>
                  {place.school || place.job}{" "}
                  <button
                    className={this.props.label}
                    onClick={(e) => this.remove(place, e)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <button className={this.props.label} onClick={this.add}>
          Add
        </button>
      </>
    );
  }
}
export default List;
