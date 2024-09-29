import { useTranslation } from 'react-i18next'
import SkillsItem from '../components/SkillsItem'

const About = () => {

  const {t } = useTranslation()

  return (
    <div id='about' >
      <h1 className='text-4xl mt-4 font-bold text-left text-[#000000] '>{t('about')}</h1>
      <div className="w-full h-[2px] bg-black mt-2"></div>
      <p className="font-bold py-8 text-justify">{t('aboutText')}</p>
      <h1 className='text-3xl font-bold  text-[#000000] '>{t('education')}</h1>
        <div className="w-full h-[2px] bg-black mt-2"></div>
            <div className="flex justify-between font-bold py-4">
              <span>{t('education1')}</span>
              <span className='ml-12'>2021-2024</span >
            </div>
            <div className="flex justify-between font-bold py-4">
              <span>{t('education2')} </span>
              <span>2017-2021</span>
            </div>
            <h1 className='text-3xl font-bold text-[#000000]'>{t('experience')}</h1>
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