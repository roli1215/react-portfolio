
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
const Home = () => {
  return (
    <div id='home'>
       <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800"> I'm Roland</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800"> I'm a
                <TypeAnimation
                    sequence={[
                        'Developer',
                        2000, 
                        'Trail Runner',
                        2000,
                            ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft : '5px' }}
                    repeat={Infinity}
                />
                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <FaFacebook className= "cursor-pointer" size={25}/>
                    <FaInstagram  className= "cursor-pointer" size={25}/>
                    <FaLinkedin  className= "cursor-pointer" size={25}/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Home