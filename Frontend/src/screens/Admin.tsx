import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useProjects from "../hooks/useProjects";
import ProjectForm from "../components/admin/ProjectForm";
import ProjectList from "../components/admin/ProjectList";
import Toast from "../components/Toast";
import { ProjectDTO } from "../DTOs/ProjectDTO";

const Admin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    stack: "",
    descriptionHU: "",
    descriptionEN: "",
    image: null as File | null,
  });

  const [editId, setEditId] = useState<string | null>(null);
  const [toast, setToast] = useState("");

  const { projects, deleteProject, createProject } = useProjects();

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  const resetForm = () => {
    setEditId(null);
    setForm({
      title: "",
      stack: "",
      descriptionHU: "",
      descriptionEN: "",
      image: null,
    });
  };

  const handleSubmit = async () => {
    if (!form.image && !editId) return;

    await createProject({
      ...form,
      stack: form.stack.split(",").map((item) => item.trim()),
    });

    showToast(editId ? "Sikeres projekt módosítás!" : "Sikeres projekt létrehozás!");
    resetForm();
  };

  const handleDelete = async (id: string) => {
    await deleteProject(id);
    showToast("Sikeres projekt törlés!");
  };

  const handleEdit = (project: ProjectDTO) => {
    setEditId(project._id);

    setForm({
      title: project.title,
      stack: project.stack.join(", "),
      descriptionHU: project.descriptionHU,
      descriptionEN: project.descriptionEN,
      image: null,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    showToast("Kijelentkezve!");

    setTimeout(() => navigate("/login"), 800);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10 animate-fadeIn">
      {toast && <Toast message={toast} />}

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Admin kezelőfelület</h1>
            <p className="text-gray-500 mt-2">Projektjeid egyszerű kezelése</p>
          </div>

          <button className="bg-red-600 text-white px-6 py-3 rounded-xl transition hover:bg-red-700 hover:scale-105 active:scale-95" onClick={logout}>
            Kijelentkezés
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-12 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-6">{editId ? "Projekt módosítás" : "Projekt létrehozás"}</h2>

          <ProjectForm editId={editId} form={form} setForm={setForm} onSubmit={handleSubmit} onCancel={resetForm} />
        </div>

        <h2 className="text-3xl font-bold mb-6">Projektek</h2>

        <ProjectList projects={projects} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Admin;
