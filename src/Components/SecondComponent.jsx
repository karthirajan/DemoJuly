import { Component } from "react";

class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
        <h3>Second Component</h3>
      </div>
    );
  }
}

export class ThirdComponent extends Component {
  render() {
    return (
      <div className="thirdComponent">
        <h3>Third Component</h3>
      </div>
    );
  }
}

export default SecondComponent;
