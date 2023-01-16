import React from "react";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import "../style.css";
import Phone from "../images/phone.svg";
import Email from "../images/email.svg";
import Website from "../images/web.svg";

class Resume extends React.Component {
  render() {
    const propsArray = [...this.props.values];
    const [name, title, email, phone, website, skills, about] = propsArray;
    const schools = document.querySelectorAll(".school");
    const jobs = document.querySelectorAll(".job");

    let url = "";
    if (website.value) {
      url = website.value.replace("https://", "");
      url = url.replace("www.", "");
      const shortURL = url;
      url = `https://${url}`;
      url = (
        <a href={url} target="_blank" rel="noreferrer">
          {shortURL}
        </a>
      );
    } else url = "website.com";

    let emailAddress = "";
    if (email.value) {
      const mailTo = `mailto:${email.value}`;
      emailAddress = <a href={mailTo}>{email.value}</a>;
    } else emailAddress = "example@domain.com";

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
              <img src={Website} alt="website" />
            </div>
            <div className="contact">
              <div>{phone.value || "555-123-1234"}</div>
              <div>{emailAddress}</div>
              <div>{url}</div>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3 className="colored">Skills</h3>
          <p>
            {`${skills.value}` ||
              "Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia."}
          </p>
          <h3 className="colored">About</h3>
        </div>
        <p>
          {`${about.value}` ||
            "Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Cupidatat sunt anim incididunt nisi labore sunt null Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia."}
        </p>

        <ResumeExperience jobs={jobs} />
        <ResumeEducation schools={schools} />
      </div>
    );
  }
}

export default Resume;
