import React from "react";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import "../style.css";
import Phone from "../images/phone.svg";
import Email from "../images/email.svg";
import Location from "../images/location.svg";

class Resume extends React.Component {
  render() {
    const propsArray = [...this.props.values];
    const [name, title, email, phone, location, about] = propsArray;
    const schools = document.querySelectorAll(".school");
    const jobs = document.querySelectorAll(".job");
    const skills = document.querySelector(".skills");
    return (
      <div>
        <div className="header colored">
          <div className="profile">
            <h1 className="colored">{name.value || name.placeholder}</h1>
            <h2>{title.value || title.placeholder}</h2>
          </div>
          <div className="header-right">
            <div className="icons">
              <img src={Phone} alt="phone" />
              <img src={Email} alt="email" />
              <img src={Location} alt="location" />
            </div>
            <div className="contact">
              <div>{phone.value || "555-123-1234"}</div>
              <div>{email.value || "example@domain.com"}</div>
              <div>{location.value || location.placeholder}</div>
            </div>
          </div>
        </div>
        <p>
          {about.value ||
            "Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia."}
        </p>

        <ResumeExperience jobs={jobs} />
        <ResumeEducation schools={schools} />
        <div className="skills">
          <h3 className="colored">Skills</h3>
          <p>
            {skills.value ||
              "Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia."}
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
