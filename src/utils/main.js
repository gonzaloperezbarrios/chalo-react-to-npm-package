import React, { Suspense } from "react";
// Use this function to translate
import { useTranslation } from "react-i18next";
import SumBusiness from "./sumBusiness";

const SumWithTranslation = props => {
  const { inputA, inputB } = props;
  const result = SumBusiness(inputA, inputB);
  // Use this function to translate
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="demo">
        {t("returnedChecksReport.totalAmount")}, {result}
      </div>
    </Suspense>
  );
};

export default SumWithTranslation;
