import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setError("");

    if (!username || !password) {
      setError("Felhasználónév és jelszó kötelező");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/admin");
    } catch (error) {
      setError("Hibás felhasználónév vagy jelszó");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 animate-fadeIn">
        <h1 className="text-4xl font-bold text-center mb-8">Bejelentkezés</h1>

        <div className="space-y-5">
          <input
            className="w-full border rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-black focus:scale-[1.02]"
            placeholder="Felhasználó név"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="w-full border rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-black focus:scale-[1.02]"
            type="password"
            placeholder="Jelszó"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            className="w-full bg-black text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            disabled={loading}
            onClick={login}
          >
            {loading ? "Bejelentkezés folyamatban.." : "Belépés"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
