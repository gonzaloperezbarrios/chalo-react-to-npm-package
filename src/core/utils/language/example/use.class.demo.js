import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import "../i18n";

class Demo extends Component {
  constructor(props) {
    const { languageURL, i18n, language } = props;
    i18n.options.backend.loadPath = `${languageURL}/locales/{{lng}}/{{ns}}.json`;
    if (language !== i18n.language) {
      i18n.changeLanguage(language);
    }
    super(props);
  }

  render() {
    const { t } = props;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {t("returnedChecksReport.totalAmount")}
      </Suspense>
    );
  }
}

export default withTranslation()(Demo);
