import { lapchess, wordScope, shopify } from 'config/projects'
import { useAppSelector } from 'redux/store'
import Project from './components/Project'
import content from './content.json'

const Experience = () => {
    const language = useAppSelector((store) => store.language)
    const { title, description, warning } = content[language]

    return (
        <div className='m-auto mt-36 w-fit text-center' id='experience'>
            <h1 className='text-6xl font-bold text-teal-400'>{title}</h1>
            <p className='m-auto mt-10 w-[800px] text-2xl font-medium dark:text-white'>
                {description}
            </p>
            <div className='m-auto mt-10 flex w-fit gap-8'>
                <Project project={lapchess} />
                <Project project={shopify} />
                <Project project={wordScope} />
            </div>
            <p className='mt-4 text-lg font-semibold text-gray-500'>{warning}</p>
        </div>
    )
}

export default Experience
