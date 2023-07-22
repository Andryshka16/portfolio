import { useAppSelector } from 'redux/store'
import panda from 'assets/panda.png'
import content from './content.json'

const About = () => {
    const language = useAppSelector((store) => store.language)
    const { greeting, speciality, description } = content[language]

    return (
        <div
            className='m-auto mt-10 w-fit text-center sm:mt-36'
            id='about'
            data-aos='fade-up'
            data-aos-duration='500'
        >
            <h1 className='text-5xl font-bold text-zinc-700 dark:text-teal-400 sm:text-6xl'>
                {greeting}
            </h1>
            <h2 className='mt-4 text-2xl font-semibold text-zinc-800 dark:text-white sm:text-3xl'>
                {speciality}
            </h2>
            <p className='m-auto mt-5 max-w-[650px] text-xl font-medium text-zinc-900 dark:text-white sm:text-2xl'>
                {description}
            </p>
            <img src={panda} className='m-auto mt-8 h-64 w-64 rounded-full sm:h-72 sm:w-72' />
        </div>
    )
}

export default About
