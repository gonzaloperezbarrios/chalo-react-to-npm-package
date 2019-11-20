import React, { Component } from "react";
//Import package demo-react-to-npm-package
import Demo from "demo-react-to-npm-package";

// Implementation example
class SumsDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Demo
        inputA={1}
        inputB={20}
        // (Required)
        // Translate to English
        // language="en"
        // (Required)
        // Translate to Spanish
        language="es"
        // (Required)
        // Language Package
        languageURL=""
      />
    );
  }
}

export default SumsDemo;
