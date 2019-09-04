import React, { Component } from "react";
//Import package demo-react-to-npm-package
import Demo from "demo-react-to-npm-package";

// Implementation example
class SumsDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Demo inputA={2} inputB={3} />;
  }
}

export default SumsDemo;
