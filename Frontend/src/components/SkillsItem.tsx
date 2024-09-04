
interface SkillsItemProps {
    img : string,
    }

const ProjectItem = ({img} : SkillsItemProps) => {
  return (
    <div className="relative items-start h-auto w-full">
        <img className="max-w-[70px]" src={img}></img>
    </div>
  )
}

export default ProjectItem