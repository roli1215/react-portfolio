import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1200px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Projects</h1>
      <p className="text-center py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam soluta quos consequuntur distinctio atque aperiam culpa, 
        quibusdam pariatur! Vitae sunt exercitationem ducimus tempore 
        rerum laborum asperiores iste neque blanditiis hic?
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={"assets/background.JPG"} title="RunSync"/>
        <ProjectItem img={"assets/memeBackground.jpg"} title="Meme Searcher"/>
      </div>
    </div>
  )
}

export default Projects