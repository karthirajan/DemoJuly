import Counter from "./Counter";
import React from "react";

class CounterMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countAll: 0,
    };
  }
  incrementAll = (value) => {
    console.log("Increment All");
    this.setState({
      countAll: this.state.countAll + value,
    });
  };
  decrementAll = (value) => {
    if (this.state.countAll > 0) {
    console.log("Decrement All");
    this.setState({
      countAll: this.state.countAll - value,
    });
}
  };
  reset = () => {
    this.setState({
      countAll: 0,
    });
  };
  render() {
    return (
      <div>
        <div>Counter App</div>
        <Counter
          inc={2}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={4}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={15}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <div className="counter-all mt-4">{this.state.countAll}</div>
        <button className="reset-btn btn btn-danger mt-3" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default CounterMain;
