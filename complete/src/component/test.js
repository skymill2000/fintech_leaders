import React, { Component } from "react";

export default class test extends Component {
  state = {
    data: 1,
  };

  handleChange = () => {
    this.setState({ ...this.state, data: 3 });
  };

  render() {
    return <div>{this.state.data}</div>;
  }
}
