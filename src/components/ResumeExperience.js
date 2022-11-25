/* eslint-disable no-useless-constructor */
import React from "react";

class ResumeExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const entries = [...this.props.jobs];
    return (
      <div>
        <h3 className="work">Work History</h3>
        {entries.map((entry, index) => {
          const job = entry.children;
          return (
            <div key={index}>
              <div className="work">
                <div>{job.Position.value || job.Position.placeholder}</div>
                <div>
                  {job.Company.value || job.Company.placeholder} |{" "}
                  {job.StartDate.value || job.StartDate.placeholder} -{" "}
                  {job.EndDate.value || job.EndDate.placeholder}
                </div>
              </div>
              <p>
                  {job.JobDuties.value ||
                    "Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia."}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ResumeExperience;
