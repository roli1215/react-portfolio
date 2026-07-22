import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="h-52 bg-gray-800 ">
      <h1 className="text-3xl font-bold text-white py-2 text-center">{t("contactMe")}</h1>
      <div className="grid grid-cols-2 justify-items-center py-4 max-w-lg mx-auto gap-y-4">
        <a href="https://www.facebook.com/roland.karczub/" target="_blank" rel="noopener noreferrer" className="flex items-center w-48 ml-10 md:ml-0">
          <FaFacebook className="cursor-pointer text-white" size={30} />
          <span className="text-white ml-2">Facebook</span>
        </a>
        <a href="https://www.instagram.com/_roland02_/" target="_blank" rel="noopener noreferrer" className="flex items-center w-48 ml-36 md:ml-40">
          <FaInstagram className="cursor-pointer text-white" size={30} />
          <span className="text-white ml-2">Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/roland-karczub-b040b5326/" target="_blank" rel="noopener noreferrer" className="flex items-center w-48 ml-10 md:ml-0">
          <FaLinkedin className="cursor-pointer text-white" size={30} />
          <span className="text-white ml-2">LinkedIn</span>
        </a>
        <a href="mailto://karczubroland@gmail.com" className="flex items-center w-48 ml-36 md:ml-40">
          <FaEnvelope className="cursor-pointer text-white" size={30} />
          <span className="text-white ml-2">Email</span>
        </a>
      </div>
      <h1 className="text-lg font-bold text-white py-2 text-center flex justify-center">2024</h1>
    </div>
  );
};

export default Footer;
