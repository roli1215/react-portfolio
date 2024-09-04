
import Contact from './screens/Contact'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Sidenav from './components/Sidenav'
function App() {

  return (
    <>
      <div>
        <Sidenav />
        <Home />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
