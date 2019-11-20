import React, { Suspense } from "react";
import IMAGE from "../../assets/images/test.jpg";

const ResultComponent = props => {
  const { totalAmount, result } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container bg-background">
        <img src={IMAGE} alt="Smiley face" className="demo-image" />
        <div className="demo">
          {totalAmount}, {result}
        </div>
      </div>
    </Suspense>
  );
};

export default ResultComponent;
