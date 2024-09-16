
import Contact from './screens/Contact'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Sidenav from './components/Sidenav'
import About from './screens/About'

function App() {

  return (
    <>
      <div>
        <Sidenav />
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App
