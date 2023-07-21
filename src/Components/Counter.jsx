import React from "react";
import "./css/style.css";
import PropTypes from "prop-types";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + this.props.inc,
    });
    this.props.incrementAll(this.props.inc);
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - this.props.inc,
      });
      this.props.decrementAll(this.props.inc);
    }
  };

  render() {
    let customStyle = { backgroundColor: "rgb(22, 199, 199)", color: "azure" };
    return (
      <div className="counter-main">
        <div className="counter-outer d-flex align-items-center mt-4">
          <button
            // style={customStyle}
            className="counter-btn btn btn-success"
            onClick={this.decrement}
          >
            -{this.props.inc}
          </button>
          {/* <div className="count">{this.state.count}</div> */}
          <button
            // style={customStyle}
            className="counter-btn btn btn-success"
            onClick={this.increment}
          >
            +{this.props.inc}
          </button>
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  inc: 1,
};
Counter.propTypes = {
  inc: PropTypes.number,
};

export default Counter;
