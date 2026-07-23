import { ProjectDTO } from "../../DTOs/ProjectDTO";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: ProjectDTO[];
  onDelete: (id: string) => void;
  onEdit: (project: ProjectDTO) => void;
}

const ProjectList = ({ projects, onDelete, onEdit }: ProjectListProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ProjectList;
