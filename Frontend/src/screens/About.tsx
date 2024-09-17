import SkillsItem from '../components/SkillsItem'

const About = () => {
  return (
    <div id='about' >
      <h1 className='text-4xl mt-4 font-bold text-left text-[#000000] '>About</h1>
      <div className="w-full h-[2px] bg-black mt-2"></div>
      <p className="font-bold py-8 text-justify">I am a graduate software developer with a strong interest in web development and mobile app development. I have created a few personal projects so far, some of which are still in progress, as I strive to improve and reach a higher level of proficiency. My experience is primarily in React/React Native, working with JavaScript/TypeScript, and in database management with MongoDB and PostgreSQL. I am open to trying new things and am committed to performing the tasks ahead of me to the best of my ability.</p>
      <h1 className='text-3xl font-bold  text-[#000000] '>Education</h1>
        <div className="w-full h-[2px] bg-black mt-2"></div>
            <div className="flex justify-between font-bold py-4">
              <span>Software Development – University of Miskolc</span>
              <span>2021-2024</span >
            </div>
            <div className="flex justify-between font-bold py-4">
              <span>Information Technology Major – István Bocskai High School and Technical School</span>
              <span>2017-2021</span>
            </div>
            <h1 className='text-3xl font-bold text-[#000000]'>Experience</h1>
            <div className="w-full h-[2px] bg-black mt-2"></div>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 py-4'>
            <SkillsItem img="assets/react.svg" ></SkillsItem>
            <SkillsItem img="assets/typescript.svg" ></SkillsItem>
            <SkillsItem img="assets/javascript.svg" ></SkillsItem>
            <SkillsItem img="assets/python.svg" ></SkillsItem>
            <SkillsItem img="assets/java.svg" ></SkillsItem>
            <SkillsItem img="assets/c.svg" ></SkillsItem>
            <SkillsItem img="assets/mongodb.svg" ></SkillsItem>
            <SkillsItem img="assets/postgresql.svg" ></SkillsItem>
            <SkillsItem img="assets/css.svg" ></SkillsItem>
            <SkillsItem img="assets/tailwindcss.svg" ></SkillsItem>
            <SkillsItem img="assets/docker.svg" ></SkillsItem>
            <SkillsItem img="assets/swagger.svg" ></SkillsItem>
            <SkillsItem img="assets/git.svg" ></SkillsItem>
            <SkillsItem img="assets/html.svg" ></SkillsItem>
            </div>
    </div>
  )
}

export default About