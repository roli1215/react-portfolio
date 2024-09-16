import { useEffect, useState } from 'react';
import ProjectItem from '../components/ProjectItem'
import axios from 'axios';
import { ProjectDTO } from '../DTOs/ProjectDTO';

const Projects = () => {

  const [projects, setProjects] = useState<ProjectDTO[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/projects');
        setProjects(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }

    fetchProjects();
  }, []);


  return (
    <div id='projects' className='max-w-[1200px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#000000] '>Projects</h1>
      <p className="font-bold py-8">Here are the projects I have worked on so far, or am still working on. Some of them are in the early stages or incomplete, but I enjoy working on them whenever I have time. I learn a lot while creating them and try to gain as much experience as possible to become more successful.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projects.map((project) => (
          console.log(project.imageId?.imageString),
          <ProjectItem key = {project._id} img={project.imageId?.imageString} title = {project.title} description = {project.description} language = {project.stack}/>
          
        ))}
      
      </div>
    </div>
  )
}

export default Projects