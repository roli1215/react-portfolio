
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
const Home = () => {

    const {t,i18n} = useTranslation()

  return (
    <div id='home'>
        
      <img src="/assets/bg.jpg" alt="background" className="w-full h-screen object-cover "/>
       <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
            <div className="max-w-[1000px] items-center justify-center m-auto h-full w-full flex flex-col lg:items-start ">
                <h1 className="sm:text-6xl text-5xl font-bold text-gray-800">{t('name')}</h1>
                <h2 className="flex sm:text-4xl text-2xl font-bold pt-4 text-gray-800"> 
                <TypeAnimation
                    key = {i18n.language}
                    sequence={[
                        t('status1'),
                        2000, 
                        t('status2'),
                        2000,
                            ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft : '5px' }}
                    repeat={Infinity}
                />
                </h2>
                <div className="flex justify-between pt-5 max-w-[165px] w-full">
                <a href="https://www.facebook.com/roland.karczub/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="cursor-pointer" size={30} />
                </a>
                <a href="https://www.instagram.com/_roland02_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram  className= "cursor-pointer" size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/roland-karczub-b040b5326/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin  className= "cursor-pointer" size={30}/>
                </a>
                
                </div>
                
            </div>
       </div>
    </div>
  )
}

export default Home