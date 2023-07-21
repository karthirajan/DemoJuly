import React from "react";

class Unmounting extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  removeHeader = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    let header;
    if (this.state.show) {
      header = <Header />;
    }
    return (
      <div>
        {header}
        <button onClick={this.removeHeader}>Remove Header</button>
      </div>
    );
  }
}

class Header extends React.Component {
  componentWillUnmount() {
    alert("The header will be removed");
  }

  render() {
    return <h3>My favourite color is red</h3>;
  }
}

export default Unmounting;
