interface ProjectFormProps {
  editId: string | null;

  title: string;
  setTitle: (value: string) => void;

  stack: string;
  setStack: (value: string) => void;

  descriptionHU: string;
  setDescriptionHU: (value: string) => void;

  descriptionEN: string;
  setDescriptionEN: (value: string) => void;

  image: File | null;
  setImage: (value: File | null) => void;

  onSubmit: () => void;
  onCancel: () => void;
}

const ProjectForm = ({
  editId,

  title,
  setTitle,

  stack,
  setStack,

  descriptionHU,
  setDescriptionHU,

  descriptionEN,
  setDescriptionEN,

  setImage,

  onSubmit,
  onCancel,
}: ProjectFormProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-5">{editId ? "Edit project" : "New project"}</h2>

      <input className="border p-3 rounded-lg w-full mb-3" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <input className="border p-3 rounded-lg w-full mb-3" placeholder="React, MongoDB, Docker" value={stack} onChange={(e) => setStack(e.target.value)} />

      <textarea className="border p-3 rounded-lg w-full mb-3" placeholder="Hungarian description" value={descriptionHU} onChange={(e) => setDescriptionHU(e.target.value)} />

      <textarea className="border p-3 rounded-lg w-full mb-3" placeholder="English description" value={descriptionEN} onChange={(e) => setDescriptionEN(e.target.value)} />

      <input type="file" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />

      <div className="flex gap-3 mt-5">
        <button className="bg-black text-white px-6 py-3 rounded-xl" onClick={onSubmit}>
          {editId ? "Update project" : "Create project"}
        </button>

        {editId && (
          <button className="border px-6 py-3 rounded-xl" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;
