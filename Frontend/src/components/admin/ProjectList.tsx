import { ProjectDTO } from "../../DTOs/ProjectDTO";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: ProjectDTO[];
  onDelete: (id: string) => void;
  onEdit: (project: ProjectDTO) => void;
}

const ProjectList = ({ projects, onDelete, onEdit }: ProjectListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ProjectList;
