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
        {entries.map((entry, index) => {
          const job = entry.children;
          return (
            <span key={index}>
              {job.Company.value || job.Company.placeholder}
            </span>
          );
        })}
      </div>
    );
  }
}

export default ResumeExperience;
