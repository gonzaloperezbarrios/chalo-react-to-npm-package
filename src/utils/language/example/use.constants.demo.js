import React, { Suspense } from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "../i18n";

const Demo = ({ language, languageURL, t, i18n }) => {
  i18n.options.backend.loadPath = `${languageURL}/locales/{{lng}}/{{ns}}.json`;
  if (language !== i18n.language) {
    i18n.changeLanguage(language);
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {t("returnedChecksReport.totalAmount")}
    </Suspense>
  );
};

Demo.propTypes = {
  language: PropTypes.oneOf(["en", "es"]),
  languageURL: PropTypes.string.isRequired
};

export default withTranslation()(Demo);
