import { ProjectDTO } from "../../DTOs/ProjectDTO";

interface Props {
  project: ProjectDTO;
  onDelete: (id: string) => void;
  onEdit: (project: ProjectDTO) => void;
}

const ProjectCard = ({ project, onDelete, onEdit }: Props) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleDelete = () => {
    if (window.confirm("Biztosan törölni szeretnéd ezt a projektet?")) {
      onDelete(project._id);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img src={`${apiUrl}${project.image}`} className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((item) => (
            <span key={item} className="bg-black text-white px-3 py-1 rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-6">{project.descriptionHU}</p>

        <div className="flex gap-3">
          <button onClick={() => onEdit(project)} className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Módosítás
          </button>

          <button onClick={handleDelete} className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition">
            Törlés
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
