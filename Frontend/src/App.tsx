
import Contact from './screens/Contact'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Sidenav from './components/Sidenav'
import About from './screens/About'

function App() {


  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }


  return (
    <>
      <div>
        <Sidenav />
        <Home />
        <Projects />
        <About />
        <Contact />
        <div className="flex" onClick={handleClick}>
        <div className="flex-initial w-64 font-bold underline decoration-sky-500 text-red-800">
          Change Mode (Dark/Light)
        </div>
      </div>
      </div>
    </>
  )
}

export default App
