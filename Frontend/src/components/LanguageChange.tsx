import { useState } from "react";
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
        className="bg-black text-white p-2 rounded"
        onClick={handleChangeLanguage}
      >
        {currentLanguage === 'en' ? 'Switch to Hungarian' : 'Switch to English'}
      </button>
    )
    }

export default LanguageChange;
