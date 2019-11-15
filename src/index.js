// Add the following lines for multi-languages
import { withTranslation } from "react-i18next";
import "./utils/language/i18n";
// END  multi-languages
import mainT from "./utils/main";
import PropTypes from "prop-types";
import "./styles/demo.css";

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////multi-languages//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// If you want to use the feature of translate multi-languages, you should import 'withTranslation'

// If you want to run this component in mode local
// run command: yarn start:dev (this mode working with dev-test/App.js)

// If you want to create your own unit test
// in Input required, send props.languageURL="" and
// it will take resource local in directory dev-test/locales

const Demo = props => {
  // Add the following lines for multi-languages
  const { languageURL, i18n, language } = props;
  i18n.options.backend.loadPath = `${languageURL}/locales/{{lng}}/{{ns}}.json`;

  if (language !== i18n.language) {
    i18n.changeLanguage(language);
  }
  // END  multi-languages
  return mainT(props);
};

Demo.propTypes = {
  inputA: PropTypes.number.isRequired,
  inputB: PropTypes.number.isRequired,
  language: PropTypes.oneOf(["en", "es"]),
  languageURL: PropTypes.string.isRequired
};
// add to 'withTranslation' for multi-languages
export default withTranslation()(Demo);
