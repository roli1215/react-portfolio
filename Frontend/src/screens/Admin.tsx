import { useState } from "react";
import useProjects from "../hooks/useProjects";

const Admin = () => {
  const [editId, setEditId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [stack, setStack] = useState("");
  const [descriptionHU, setDescriptionHU] = useState("");
  const [descriptionEN, setDescriptionEN] = useState("");

  const [image, setImage] = useState<File | null>(null);

  const { projects, deleteProject, createProject } = useProjects();

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

  const resetForm = () => {
    setEditId(null);

    setTitle("");

    setStack("");

    setDescriptionHU("");

    setDescriptionEN("");

    setImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1
          className="
          text-4xl
          font-bold
          mb-10
          "
        >
          Admin Dashboard
        </h1>

        <div
          className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          "
        >
          <h2
            className="
            text-2xl
            font-bold
            mb-5
            "
          >
            {editId ? "Edit project" : "New project"}
          </h2>

          <input
            className="
            border
            p-3
            rounded-lg
            w-full
            mb-3
            "
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="
            border
            p-3
            rounded-lg
            w-full
            mb-3
            "
            placeholder="React, MongoDB, Docker"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          />

          <textarea
            className="
            border
            p-3
            rounded-lg
            w-full
            mb-3
            "
            placeholder="Hungarian description"
            value={descriptionHU}
            onChange={(e) => setDescriptionHU(e.target.value)}
          />

          <textarea
            className="
            border
            p-3
            rounded-lg
            w-full
            mb-3
            "
            placeholder="English description"
            value={descriptionEN}
            onChange={(e) => setDescriptionEN(e.target.value)}
          />

          <input type="file" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />

          <div className="flex gap-3 mt-5">
            <button
              className="
              bg-black
              text-white
              px-6
              py-3
              rounded-xl
              "
              onClick={handleSubmit}
            >
              {editId ? "Update project" : "Create project"}
            </button>

            {editId && (
              <button
                className="
                border
                px-6
                py-3
                rounded-xl
                "
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        <h2
          className="
          text-3xl
          font-bold
          mt-12
          mb-6
          "
        >
          Projects
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >
          {projects.map((project) => (
            <div
              key={project._id}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-5
                "
            >
              <img
                src={project.image}
                className="
                  w-full
                  h-52
                  object-cover
                  rounded-xl
                  "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  mt-4
                  "
              >
                {project.title}
              </h3>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  mt-3
                  "
              >
                {project.stack.map((item: string) => (
                  <span
                    key={item}
                    className="
                          bg-black
                          text-white
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  className="
                    bg-red-600
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    "
                  onClick={() => deleteProject(project._id)}
                >
                  Delete
                </button>

                <button
                  className="
                    border
                    px-5
                    py-2
                    rounded-lg
                    "
                  onClick={() => handleEdit(project)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
