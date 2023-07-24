import React from "react";

const languageContext = React.createContext({
  selectedLanguage: "English",
  showContent: undefined,
  handleLanguageChange: () => {},
});

export default languageContext;
