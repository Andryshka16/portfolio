import panda from 'assets/panda.png'
import content from './content.json'
import { useAppSelector } from 'redux/store'

const About = () => {
    const language = useAppSelector((store) => store.language)
    const { greeting, speciality, description } = content[language]

    return (
        <div className='m-auto mt-36 w-fit text-center' id='about'>
            <h1 className='text-6xl font-bold text-[#05CEC2]'>{greeting}</h1>
            <h2 className='mt-4 text-3xl font-semibold text-white'>{speciality}</h2>
            <p className='m-auto mt-5 w-[650px] text-2xl font-medium text-white'>{description}</p>
            <img src={panda} className='m-auto mt-8 h-72 w-72 rounded-full' />
        </div>
    )
}

export default About
