import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Demo from "../src/index";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Demo
      inputA={1}
      inputB={20}
      language="es"
      // language="es"
      // languageURL="http://projectv-languages.s3-website-us-east-1.amazonaws.com"
      languageURL=""
    />
  </Suspense>,
  document.getElementById("app")
);
