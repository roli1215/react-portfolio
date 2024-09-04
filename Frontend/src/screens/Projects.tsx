import ProjectItem from '../components/ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1200px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#000000] '>Projects</h1>
      <p className="font-bold py-8">Here are the projects I have worked on so far, or am still working on. Some of them are in the early stages or incomplete, but I enjoy working on them whenever I have time. I learn a lot while creating them and try to gain as much experience as possible to become more successful.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={"assets/runBackground.jpg"} title="RunSync" language="React-Native - TypeScript - MongoDB" description='A simple, yet complete and structured React Native application designed to create a workout plan for athletes. The server-side part is built using the Python programming language and is connected to a MongoDB database. The user interface is written in TypeScript. The application features both simple and complex API calls, along with a creative frontend design.'/>
        <ProjectItem img={"assets/memeBackground.jpg"} title="Meme Searcher" language="React - TypeScript - Tailwind CSS" description='A two-person project where I worked on the frontend. It is a simple meme search website with Tailwind CSS design and a local MongoDB database.'/>
        <ProjectItem img={"assets/pythonBackground.png"} title="Image Finder" language="Python" description='This is just a small program I made for a friend. Its purpose is to scan the monitor, and as soon as it finds the specified button or image, it automatically clicks on it, simplifying the users task.'/>
        <ProjectItem img={"assets/recipeBackground.jpg"} title="Image Finder" language="React - TypeScript - Node.js - PostgreSQL" description='It is a half ready project yet, it will be a recipe mobile application, designed to make searching for recipes easier, as well as allowing users to create their own. It uses a PostgreSQL database and a Node.js backend.'/>
      </div>
    </div>
  )
}

export default Projects