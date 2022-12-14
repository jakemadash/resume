import React from "react";

class ResumeEducation extends React.Component {
  render() {
    const entries = [...this.props.schools];
    return (
      <div aria-label="resume-education">
        <h3 className="education colored">Education</h3>
        {entries.map((entry, index) => {
          const school = entry.children;
          return (
            <div key={index} className="education" aria-label="education-entry">
              <div>
                <div className="degree" aria-label="degree ">
                  {school.Degree.value || "Bachelor of Science"}
                </div>
                <span className="subject">
                  {school.Subject.value || "Computer Science"}
                </span>
              </div>
              <div>
                <span className="institution">
                  {school.Institution.value || school.Institution.placeholder}
                </span>{" "}
                | {school.Started.value || "Sept 2017"} -{" "}
                {school.Graduated.value || "May 2021"}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ResumeEducation;
