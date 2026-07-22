import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Sidenav from "./components/Sidenav";
import About from "./screens/About";
import Footer from "./components/Footer";

import Login from "./screens/Login";
import Admin from "./screens/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

import { LanguageProvider } from "./utils/languageContext";

function Portfolio() {
  return (
    <div className="w-full overflow-x-hidden">
      <Sidenav />

      <Home />

      <div className="max-w-[1200px] m-auto p-4 py-16">
        <Projects />

        <About />

        <Contact />
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
