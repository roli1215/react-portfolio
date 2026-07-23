import { ProjectDTO } from "../../DTOs/ProjectDTO";

interface ProjectCardProps {
  project: ProjectDTO;
  onDelete: (id: string) => void;
  onEdit: (project: ProjectDTO) => void;
}

const ProjectCard = ({ project, onDelete, onEdit }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <img src={project.image} className="w-full h-52 object-cover rounded-xl" />

      <h3 className="text-2xl font-bold mt-4">{project.title}</h3>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.stack.map((item) => (
          <span key={item} className="bg-black text-white px-3 py-1 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-5">
        <button className="bg-red-600 text-white px-5 py-2 rounded-lg" onClick={() => onDelete(project._id)}>
          Delete
        </button>

        <button className="border px-5 py-2 rounded-lg" onClick={() => onEdit(project)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
