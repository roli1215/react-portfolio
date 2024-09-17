
import Contact from './screens/Contact'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Sidenav from './components/Sidenav'
import About from './screens/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Sidenav />
      <Home />
      <div className='max-w-[1200px] m-auto  py-16'>
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
