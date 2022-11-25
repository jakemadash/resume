/* eslint-disable no-useless-constructor */
import React from "react";

class ResumeEducation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const entries = [...this.props.schools]
    return (
      <div>
        <h3 className='education'>Education</h3>
        {entries.map((entry, index) => {
          const school = entry.children;
              return (
                <div key={index} className='education'>
                  <div>{school.Institution.value || school.Institution.placeholder}</div>
                </div>
              );
            })}
      </div>
    )
  
}
}

  export default ResumeEducation;