import React from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

import Resume from "./Resume";

class Print extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <Resume ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Print;
