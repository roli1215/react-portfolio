import { AiOutlineMail, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { GrProjects } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    
    if (!nav) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className = 'absolute top-4 right-4 z-[99] md:hidden'/>
            { 
                nav ? (
                    <div className='fixed w-full h-full bg-white/80 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href="#home" className = "w-[70%] flex   items-center rounded-full shadow-lg bg-gray-200 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration:200">
                            <AiOutlineHome size={20} className="ml-20" />
                            <span className='pl-4 font-bold'>Home</span>
                        </a>
                        <a onClick={handleNav} href="#projects" className = "w-[70%] flex   items-center rounded-full shadow-lg bg-gray-200 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration:200">
                            <GrProjects size={20} className="ml-20"/>
                            <span className='pl-4 font-bold'>Projects</span>
                        </a>
                        <a onClick={handleNav} href="#about" className = "w-[70%] flex   items-center rounded-full shadow-lg bg-gray-200 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration:200">
                            <CgProfile size={20} className="ml-20"/>
                            <span className='pl-4 font-bold'>About</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className = "w-[70%] flex  items-center rounded-full shadow-lg bg-gray-200 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration:200">
                            <AiOutlineMail size={20} className="ml-20"/>
                            <span className='pl-4 font-bold'>Contact</span>
                        </a>
                    </div>
                ) :
                (
                    ''
                )
            }
            <div className="md:block fixed hidden top-[38.5%] z-10">
                <div className="flex flex-col">
                    <a href="#home" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <AiOutlineHome size={23} />
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <GrProjects size={23}/>
                    </a>
                    <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <CgProfile size={23}/>
                    </a>
                    <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={23}/>
                    </a>
                    
                </div>
            </div>
        </div>
        );
    }
export default Sidenav;