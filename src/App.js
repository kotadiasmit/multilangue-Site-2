import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { content } from "./multilingualContent";
import languageContext from "./Context/Context";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import NotFound from "./Components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const {
    englishContent,
    hebrewContent,
    arabicContent,
    hindiContent,
    gujaratiContent,
  } = content;
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showContent, setShowContent] = useState(englishContent);

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };

  useEffect(() => {
    switch (selectedLanguage) {
      case "English":
        setShowContent(englishContent);
        break;
      case "Hebrew":
        setShowContent(hebrewContent);
        break;
      case "Arabic":
        setShowContent(arabicContent);
        break;
      case "Hindi":
        setShowContent(hindiContent);
        break;
      case "Gujarati":
        setShowContent(gujaratiContent);
        break;
      default:
        setShowContent(englishContent);
        break;
    }
  }, [selectedLanguage]);
  return (
    <BrowserRouter>
      <languageContext.Provider
        value={{
          selectedLanguage,
          showContent,
          handleLanguageChange: handleLanguageChange,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </languageContext.Provider>
    </BrowserRouter>
  );
};
export default App;
