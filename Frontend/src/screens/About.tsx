import { useTranslation } from "react-i18next";
import SkillsItem from "../components/SkillsItem";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    ["React", "/assets/react.svg"],
    ["TypeScript", "/assets/typescript.svg"],
    ["JavaScript", "/assets/javascript.svg"],
    ["Angular", "/assets/angular.svg"],
    ["Python", "/assets/python.svg"],
    ["Java", "/assets/java.svg"],
    ["C", "/assets/c.svg"],
    ["MongoDB", "/assets/mongodb.svg"],
    ["PostgreSQL", "/assets/postgresql.svg"],
    ["CSS", "/assets/css.svg"],
    ["Tailwind", "/assets/tailwindcss.svg"],
    ["Docker", "/assets/docker.svg"],
    ["Swagger", "/assets/swagger.svg"],
    ["Git", "/assets/git.svg"],
    ["HTML", "/assets/html.svg"],
  ];

  return (
    <AnimatedSection>
      <section id="about" className="py-10">
        <h1 className="text-4xl font-bold">{t("about")}</h1>
        <div className="h-[2px] bg-black mt-3 mb-8" />
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <p className="text-gray-700 leading-7 text-justify">{t("aboutText")}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Angular", "React", "TypeScript", "Node.js"].map((item) => (
                <span key={item} className=" bg-black text-white px-3 py-1 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-5">{t("education")}</h2>
            <div className="border-l-4 border-black pl-5 space-y-6">
              <div>
                <h3 className="font-bold text-lg">{t("education1")}</h3>
                <p className="text-gray-600">2021 - 2024</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t("education2")}</h3>
                <p className="text-gray-600">2017 - 2021</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-16">{t("work")}</h2>
        <div className="h-[2px] bg-black mt-3 mb-8" />
        <div className="bg-gray-100 rounded-xl p-6 shadow-md border-l-4 border-black">
          <h3 className="text-xl font-bold">Nemzeti Adó- és Vámhivatal Informatikai Intézet</h3>
          <p className="font-semibold text-gray-700 mt-1">Angular {t("develop")}</p>
          <p className="text-gray-600 mt-2">2024. November - {t("present")}</p>
          <ul className="mt-4 space-y-3">
            {["w1", "w2", "w3", "w4", "w5"].map((item) => (
              <li key={item} className="flex gap-2 text-gray-600">
                <span>▹</span>
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="text-3xl font-bold mt-16">{t("experience")}</h2>
        <div className="h-[2px] bg-black mt-3 mb-8" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8">
          {skills.map(([name, img]) => (
            <SkillsItem key={name} name={name} img={img} />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
