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
      className=" text-white  mt-2 flex items-center"
      onClick={handleChangeLanguage}
    >
      <ReactCountryFlag
        countryCode={currentLanguage === 'en' ? "GB" : "HU"} 
        svg
        style={{
          width: '2.2em',
          height: '2.2em',
        }}
        aria-label={currentLanguage === 'en' ? 'English flag' : 'Hungarian flag'}
      />
    </button>
    )
    }

export default LanguageChange;
