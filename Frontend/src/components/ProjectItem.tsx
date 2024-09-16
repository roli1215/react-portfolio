
interface ProjectItemProps {
    img : string,
    title: string;
    description : string;
    language: string
    }

const ProjectItem = ({title, img, description,language} : ProjectItemProps) => {
  return (
    <div className = "relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-gray-800 to-[#2b2a2a]">
    <img src={img} alt={title} className="rounded-xl group-hover:opacity-10"/>
    <div className = "hidden group-hover:block absolute top-[50%] left-[15%] translate-x-[-10%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center underline">
            {title}
        </h3>
        <h2 className="text-center font-bold m-3 text-base text-gray-300">{language}</h2>
        <h2 className="font-bold m-3 text-justify text-xs md:text-sm  text-gray-300 italic" >{description}</h2>
    </div>
    </div>
  )
}

export default ProjectItem