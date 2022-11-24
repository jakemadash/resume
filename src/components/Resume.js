/* eslint-disable no-useless-constructor */
import React from "react";
import ResumeEducation from "./ResumeEducation";
import "../style.css";
import Phone from "../images/phone.svg";
import Email from "../images/email.svg";

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const propsArray = [...this.props.values];
    const [name, title, email, phone, about] = propsArray;
    const schools = document.querySelectorAll(".school");
    const jobs = document.querySelectorAll(".job");
    return (
      <div>
        <div className="header">
          <div className="profile">
            <h1>{name.value || name.placeholder}</h1>
            <h3>{title.value || title.placeholder}</h3>
          </div>
          <div className="contact">
            <div>
              <img src={Phone} alt="phone" />
              {phone.value || phone.placeholder}
            </div>
            <div>
              <img src={Email} alt="email" />
              {email.value || email.placeholder}
            </div>
          </div>
        </div>
        <p>
          {about.value ||
            "Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia."}
        </p>
        <ResumeEducation schools={schools} />
      </div>
    );
  }
}

export default Resume;
