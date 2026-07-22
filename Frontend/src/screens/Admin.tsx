import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectDTO } from "../DTOs/ProjectDTO";

const Admin = () => {
  const apiUrl = import.meta.env.VITE_API_URL as string;

  const [projects, setProjects] = useState<ProjectDTO[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [stack, setStack] = useState("");
  const [descriptionHU, setDescriptionHU] = useState("");
  const [descriptionEN, setDescriptionEN] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const token = localStorage.getItem("token");

  const loadProjects = async () => {
    try {
      const response = await axios.get(`${apiUrl}/projects`);

      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const uploadImage = async () => {
    if (!image) {
      alert("Select image");
      return;
    }

    const formData = new FormData();

    formData.append("image", image);

    const response = await axios.post(`${apiUrl}/upload`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.image;
  };

  const createProject = async () => {
    try {
      if (editId) {
        await axios.put(
          `${apiUrl}/projects/${editId}`,
          {
            title,
            stack: stack.split(",").map((x) => x.trim()),

            descriptionHU,
            descriptionEN,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } else {
        const imagePath = await uploadImage();

        await axios.post(
          `${apiUrl}/projects`,
          {
            title,
            stack: stack.split(",").map((x) => x.trim()),

            descriptionHU,
            descriptionEN,
            image: imagePath,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      }

      alert("Project created");

      setTitle("");
      setStack("");
      setDescriptionHU("");
      setDescriptionEN("");
      setImage(null);

      loadProjects();
    } catch (error) {
      console.error(error);
    }

    setEditId(null);
  };

  const deleteProject = async (id: string) => {
    if (!confirm("Delete project?")) {
      return;
    }

    try {
      await axios.delete(`${apiUrl}/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

        {/* CREATE */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
        "
        >
          <h2 className="text-2xl font-bold mb-5">New project</h2>

          <input
            className="border p-3 rounded-lg w-full mb-3"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border p-3 rounded-lg w-full mb-3"
            placeholder="React, MongoDB, Docker"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          />

          <textarea
            className="border p-3 rounded-lg w-full mb-3"
            placeholder="Hungarian description"
            value={descriptionHU}
            onChange={(e) => setDescriptionHU(e.target.value)}
          />

          <textarea
            className="border p-3 rounded-lg w-full mb-3"
            placeholder="English description"
            value={descriptionEN}
            onChange={(e) => setDescriptionEN(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />

          <button
            className="
            mt-5
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            "
            onClick={createProject}
          >
            {editId ? "Update project" : "Create project"}
          </button>
        </div>

        {/* PROJECT LIST */}

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
                src={`${apiUrl}${project.image}`}
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
                {project.stack.map((item) => (
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

              <button
                className="
                bg-red-600
                text-white
                px-5
                py-2
                rounded-lg
                mt-5
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
ml-3
"
                onClick={() => {
                  setEditId(project._id);

                  setTitle(project.title);
                  setStack(project.stack.join(", "));
                  setDescriptionHU(project.descriptionHU);
                  setDescriptionEN(project.descriptionEN);
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
