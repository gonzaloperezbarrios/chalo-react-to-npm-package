import React from "react";
// Use this function to translate
import { useTranslation } from "react-i18next";
import SumBusiness from "./business/rules/sumBusiness";
import ResultComponent from "./components/resultComponents";

const SumWithTranslation = props => {
  const { inputA, inputB } = props;
  const result = SumBusiness(inputA, inputB);
  // Use this function to translate
  const { t } = useTranslation();
  const totalAmount = t("returnedChecksReport.totalAmount");
  return <ResultComponent totalAmount={totalAmount} result={result} />;
};

export default SumWithTranslation;
