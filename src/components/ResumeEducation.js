import React from "react";

class ResumeEducation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const entries = [...this.props.schools]
    return (
      <div>
        {entries.map((entry, index) => {
          const school = entry.children;
              return (
                <span key={index}>
                  {school.Institution.value || school.Institution.placeholder}
                </span>
              );
            })}
      </div>
    )
  
}
}

  export default ResumeEducation;