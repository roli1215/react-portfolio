import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-center gap-8 text-2xl">
          <a href="mailto:karczubroland@gmail.com" className="flex items-center gap-2 text-white hover:scale-110 transition duration-300">
            <FaEnvelope />
          </a>

          <a href="https://github.com/..." target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:scale-110 transition duration-300">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/..." target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:scale-110 transition duration-300">
            <FaLinkedin />
          </a>

          <a href="https://facebook.com/..." target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:scale-110 transition duration-300">
            <FaFacebook />
          </a>

          <a href="https://instagram.com/..." target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:scale-110 transition duration-300">
            <FaInstagram />
          </a>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>{t("built")} React + Node.js</p>

          <p className="mt-2">© {new Date().getFullYear()} Roland Karczub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
