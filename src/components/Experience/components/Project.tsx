import { NavLink } from 'react-router-dom'
import content from '../content.json'
import { useAppSelector } from 'redux/store'

interface ProjectProps {
    project: {
        description: {
            EN: string
            RU: string
            LV: string
        }
        image: {
            source: string
            style: string
        }
        source: string
        preview: string
    }
}

const Project = ({ project: { description, image, source, preview } }: ProjectProps) => {
    const language = useAppSelector((store) => store.language)
    const { buttons } = content[language]

    return (
        <div className='rounded-3xl bg-zinc-200 px-10 pb-1 pt-5 dark:bg-[#2A2A67]'>
            <img src={image.source} className={`${image.style} sm:scale-1 scale-75`} alt='' />
            <h3 className='w-64 text-center text-base font-bold text-zinc-800 dark:text-white sm:mt-4 sm:w-80 sm:text-lg '>
                {description[language]}
            </h3>
            <div className='m-auto my-5 flex w-fit gap-8 sm:gap-10'>
                <NavLink
                    to={source}
                    target='blank'
                    className='w-24 rounded-md border-2 border-red-400 font-medium text-red-400 transition duration-300 hover:border-slate-400 hover:bg-slate-400 hover:text-zinc-200 dark:border-[#05CEC2] dark:bg-[#2A2A67] dark:text-teal-400 dark:hover:border-slate-200 dark:hover:bg-slate-200 dark:hover:text-[#2A2A67] sm:w-28 sm:py-0.5'
                >
                    {buttons.source}
                </NavLink>
                <NavLink
                    to={preview}
                    target='blank'
                    className='w-24 rounded-md bg-red-400 font-medium text-zinc-200 transition duration-300 hover:bg-slate-400 dark:bg-[#05CEC2] dark:text-[#2A2A67] dark:hover:bg-slate-200 sm:w-28 sm:py-0.5'
                >
                    {buttons.preview}
                </NavLink>
            </div>
        </div>
    )
}

export default Project
