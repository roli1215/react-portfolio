import { useState } from "react";
import axios from "axios";


const Admin = () => {

  const apiUrl = import.meta.env.VITE_API_URL as string;


  const [title, setTitle] = useState("");
  const [stack, setStack] = useState("");
  const [descriptionHU, setDescriptionHU] = useState("");
  const [descriptionEN, setDescriptionEN] = useState("");

  const [image, setImage] = useState<File | null>(null);


  const uploadImage = async () => {

    if (!image) {
      alert("Select image");
      return;
    }


    const formData = new FormData();

    formData.append("image", image);


    const response = await axios.post(
      `${apiUrl}/upload`,
      formData,
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`
        }
      }
    );


    return response.data.image;

  };



  const createProject = async () => {

    try {

      const imagePath = await uploadImage();

      if (!imagePath) {
        return;
      }
      await axios.post(
        apiUrl + "/projects",
        {
          title,
          stack: stack.split(",").map(item => item.trim()),
          descriptionHU,
          descriptionEN,
          image: imagePath
        },
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`
          }
        }
      );


      alert("Project created");


    } catch (error) {

      console.error(error);

    }

  };



  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Admin
      </h1>


      <input
        className="border p-2 block my-2"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />


      <input
        className="border p-2 block my-2"
        placeholder="React, MongoDB, Docker"
        onChange={(e) => setStack(e.target.value)}
      />


      <textarea
        className="border p-2 block my-2"
        placeholder="HU description"
        onChange={(e) => setDescriptionHU(e.target.value)}
      />


      <textarea
        className="border p-2 block my-2"
        placeholder="EN description"
        onChange={(e) => setDescriptionEN(e.target.value)}
      />


      <input
        type="file"
        onChange={(e) =>
          setImage(e.target.files?.[0] || null)
        }
      />


      <button
        className="bg-black text-white px-5 py-2 mt-4"
        onClick={createProject}
      >
        Save project
      </button>


    </div>
  )
}


export default Admin;