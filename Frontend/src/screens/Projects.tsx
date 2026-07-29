import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import ProjectItem from "../components/ProjectItem";
import { ProjectDTO } from "../DTOs/ProjectDTO";
import AnimatedSection from "../components/AnimatedSection";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectDTO[]>([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get(`${apiUrl}/projects`)
      .then((res) => setProjects(res.data))
      .catch(console.error);
  }, []);

  return (
    <AnimatedSection>
      <section id="projects" className="max-w-[1200px] mx-autopy-20 px-5">
        <h1 className="text-4xl font-bold">{t("projects")}</h1>
        <div className="h-[2px] bg-black mt-3" />
        <p className="font-bold py-8 text-gray-700">{t("projectsText")}</p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project._id}
              img={`${apiUrl}${project.image}`}
              title={project.title}
              descriptionHU={project.descriptionHU}
              descriptionEN={project.descriptionEN}
              language={project.stack}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
