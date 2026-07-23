import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectDTO } from "../DTOs/ProjectDTO";

const apiUrl = import.meta.env.VITE_API_URL as string;

const useProjects = () => {
  const [projects, setProjects] = useState<ProjectDTO[]>([]);

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const loadProjects = async () => {
    try {
      const response = await axios.get(`${apiUrl}/projects`);

      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async (image: File) => {
    const formData = new FormData();

    formData.append("image", image);

    const response = await axios.post(`${apiUrl}/upload`, formData, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.data.image;
  };

  const createProject = async (data: { title: string; stack: string[]; descriptionHU: string; descriptionEN: string; image: File }) => {
    try {
      const imagePath = await uploadImage(data.image);

      await axios.post(
        `${apiUrl}/projects`,
        {
          title: data.title,
          stack: data.stack,
          descriptionHU: data.descriptionHU,
          descriptionEN: data.descriptionEN,
          image: imagePath,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      loadProjects();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm("Delete project?")) {
      return;
    }

    try {
      await axios.delete(`${apiUrl}/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      loadProjects();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return {
    projects,
    loadProjects,
    createProject,
    deleteProject,
    uploadImage,
  };
};

export default useProjects;
