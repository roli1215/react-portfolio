import { useEffect, useState } from 'react';
import ProjectItem from '../components/ProjectItem'
import axios from 'axios';
import { ProjectDTO } from '../DTOs/ProjectDTO';
import { useTranslation } from 'react-i18next';

const Projects = () => {

  const [projects, setProjects] = useState<ProjectDTO[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL as string;

  const { t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(apiUrl + '/projects');
        setProjects(response.data);


      } catch (error) {
        console.error(error);
      }
    }

    fetchProjects();
  }, []);


  return (
    <div id='projects'>
      <h1 className='text-4xl font-bold text-left text-[#000000] '>{t('projects')}</h1>
      <div className="w-full h-[2px] bg-black mt-2"></div>
      <p className="font-bold py-8">{t('projectsText')}
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projects.map((project) => (
          <ProjectItem key={project._id} img={`${apiUrl}${project.image}`} title={project.title} descriptionHU={project.descriptionHU} descriptionEN={project.descriptionEN} language={project.stack} />
        ))}

      </div>
    </div>
  )
}

export default Projects