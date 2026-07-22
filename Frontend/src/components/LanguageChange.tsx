import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../utils/languageContext";

const LanguageChange = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <button type="button" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" onClick={toggleLanguage}>
      <ReactCountryFlag
        countryCode={currentLanguage === "en" ? "GB" : "HU"}
        svg
        style={{
          width: "1.5em",
          height: "1.5em",
        }}
        aria-label={currentLanguage === "en" ? "English flag" : "Hungarian flag"}
      />
    </button>
  );
};

export default LanguageChange;
