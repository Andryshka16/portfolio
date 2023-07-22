import { lapchess, wordScope, shopify } from 'config/projects'
import { useAppSelector } from 'redux/store'
import Project from './components/Project'
import content from './content.json'

const Experience = () => {
    const language = useAppSelector((store) => store.language)
    const { title, description, warning } = content[language]

    return (
        <div
            className='m-auto mt-20 w-fit text-center sm:mt-36'
            id='experience'
            data-aos='fade-up'
            data-aos-duration='500'
        >
            <h1 className='text-5xl font-bold text-zinc-700 dark:text-teal-400 sm:text-6xl'>
                {title}
            </h1>
            <p className='m-auto mt-10 max-w-[800px] text-xl font-medium dark:text-white  sm:text-2xl'>
                {description}
            </p>
            <div className='m-auto mt-10 flex w-fit flex-wrap justify-center gap-x-10 gap-y-5'>
                <Project project={lapchess} />
                <Project project={shopify} />
                <Project project={wordScope} />
            </div>
            <p className='mt-4 text-lg font-semibold text-gray-500'>{warning}</p>
        </div>
    )
}

export default Experience
