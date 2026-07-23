import { useState } from "react";
import useProjects from "../hooks/useProjects";
import ProjectForm from "../components/admin/ProjectForm";
import ProjectList from "../components/admin/ProjectList";

const Admin = () => {
  const [editId, setEditId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [stack, setStack] = useState("");
  const [descriptionHU, setDescriptionHU] = useState("");
  const [descriptionEN, setDescriptionEN] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const { projects, deleteProject, createProject } = useProjects();

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setStack("");
    setDescriptionHU("");
    setDescriptionEN("");
    setImage(null);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Select image");
      return;
    }

    await createProject({
      title,
      stack: stack.split(",").map((item) => item.trim()),
      descriptionHU,
      descriptionEN,
      image,
    });

    resetForm();
  };

  const handleEdit = (project: any) => {
    setEditId(project._id);

    setTitle(project.title);
    setStack(project.stack.join(", "));
    setDescriptionHU(project.descriptionHU);
    setDescriptionEN(project.descriptionEN);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

        <ProjectForm
          editId={editId}
          title={title}
          setTitle={setTitle}
          stack={stack}
          setStack={setStack}
          descriptionHU={descriptionHU}
          setDescriptionHU={setDescriptionHU}
          descriptionEN={descriptionEN}
          setDescriptionEN={setDescriptionEN}
          image={image}
          setImage={setImage}
          onSubmit={handleSubmit}
          onCancel={resetForm}
        />

        <h2 className="text-3xl font-bold mt-12 mb-6">Projects</h2>

        <ProjectList projects={projects} onDelete={deleteProject} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Admin;
