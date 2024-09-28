import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const LanguageChange = () =>
    {
    const {i18n:{changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'hu' : 'en';
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }
    
    return (
      <button
      type="button"
      className=" rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
      onClick={handleChangeLanguage}
    >
      <ReactCountryFlag
        countryCode={currentLanguage === 'en' ? "GB" : "HU"} 
        svg
        style={{
          width: '1.5em',
          height: '1.5em',
        }}
        aria-label={currentLanguage === 'en' ? 'English flag' : 'Hungarian flag'}
      />
    </button>
    )
    }

export default LanguageChange;
