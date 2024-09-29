
import Contact from './screens/Contact'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Sidenav from './components/Sidenav'
import About from './screens/About'
import Footer from './components/Footer'
import { LanguageProvider } from './utils/languageContext'

function App() {

  return (
    <>
    <LanguageProvider>
    <div className="w-full overflow-x-hidden">
      <Sidenav />
      <Home />
      <div className='max-w-[1200px] m-auto p-4 py-16'>
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
    </LanguageProvider>
    </>
  )
}

export default App
