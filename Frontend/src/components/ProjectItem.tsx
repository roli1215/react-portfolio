import { useLanguage } from "../utils/languageContext";

interface ProjectItemProps {
  img: string;
  title: string;
  descriptionHU: string;
  descriptionEN: string;
  language: string[];
}

const ProjectItem = ({ img, title, descriptionHU, descriptionEN, language }: ProjectItemProps) => {
  const { currentLanguage } = useLanguage();

  const description = currentLanguage === "en" ? descriptionEN : descriptionHU;

  return (
    <div className="rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 bg-white overflow-hidden">
      <div className="overflow-hidden h-60">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {language.map((item) => (
            <span key={item} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
              {item}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm line-clamp-4 leading-6">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
