import React from "react";
import Personal from "./components/Personal";
import List from "./components/List";
import Resume from "./components/Resume";
import SaveEdit from "./components/SaveEdit";
import Color from "./components/Color";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import "./style.css";
import Download from "./images/download.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: "",
    };
  }

  stateUpdate = () => {
    const form = document.querySelector(".form");
    this.setState({ formValues: form.elements });
  };

  componentDidMount() {
    // reset state with loaded form values, monitor DOM changes
    this.stateUpdate();
    const targetNode = document.querySelector(".form");
    const observerOptions = {
      childList: true,
      subtree: true,
    };

    const observer = new MutationObserver(this.stateUpdate);
    observer.observe(targetNode, observerOptions);
  }

  render() {
    // make sure form values have loaded so that they feed into resume
    let resume;
    if (this.state.formValues) {
      resume = (
        <Resume
          values={this.state.formValues}
          ref={(el) => (this.componentRef = el)}
        />
      );
    } else resume = null;

    return (
      <div className="container" onChange={this.stateUpdate}>
        <form className="form" aria-label="form" onChange={this.stateUpdate}>
          <Personal />
          <List label="Work History" place="jobs" />
          <List label="Education" place="schools" />
          <br></br>
          <SaveEdit class="save" label="Save" />
        </form>

        <div className="resume-container stacked" aria-label="resume" id="">
          <Color />
          <div className="resume">{resume}</div>
          <div className="buttons">
            <SaveEdit class="edit hidden nohover" label="Edit" />
            <ReactToPrint
              content={() => this.componentRef}
              bodyClass="resume print"
            >
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <button
                    onClick={handlePrint}
                    className=" download hidden nohover"
                    aria-label="Download"
                  >
                    <img src={Download} alt="download" />
                  </button>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
