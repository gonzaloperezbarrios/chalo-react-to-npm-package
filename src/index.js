import React from "react";
import Sum from "./utils/main";
import "./styles/demo.css";

const Demo = props => {
  const { inputA, inputB } = props;
  return <span className="demo">Result is: {Sum(inputA, inputB)}</span>;
};
export default Demo;
