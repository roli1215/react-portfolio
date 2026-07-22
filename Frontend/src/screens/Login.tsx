import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const apiUrl = import.meta.env.VITE_API_URL as string;

  const navigate = useNavigate();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const login = async () => {

    try {

      const response = await axios.post(
        `${apiUrl}/auth/login`,
        {
          username,
          password
        }
      );


      localStorage.setItem(
        "token",
        response.data.token
      );


      navigate("/admin");


    } catch(error) {

      console.error(error);

      alert("Hibás felhasználónév vagy jelszó");

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="border p-8 rounded-lg">

        <h1 className="text-3xl font-bold mb-6">
          Admin login
        </h1>


        <input
          className="border p-2 block mb-4"
          placeholder="Username"
          value={username}
          onChange={
            e => setUsername(e.target.value)
          }
        />


        <input
          className="border p-2 block mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={
            e => setPassword(e.target.value)
          }
        />


        <button
          className="bg-black text-white px-6 py-2 rounded"
          onClick={login}
        >
          Login
        </button>


      </div>

    </div>

  );

};


export default Login;