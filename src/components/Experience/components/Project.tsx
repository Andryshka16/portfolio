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
            <img src={image.source} className={image.style} alt='' />
            <h3 className='mt-4 w-80 text-center text-lg font-bold text-zinc-800 dark:text-white '>
                {description[language]}
            </h3>
            <div className='m-auto my-5 flex w-fit gap-10'>
                <NavLink
                    to={source}
                    target='blank'
                    className='w-28 rounded-md border-2 border-red-400 py-0.5 font-medium text-red-400 transition duration-300 hover:border-slate-400 hover:bg-slate-400 hover:text-zinc-200 dark:border-[#05CEC2] dark:bg-[#2A2A67] dark:text-teal-400 dark:hover:border-slate-200 dark:hover:bg-slate-200 dark:hover:text-[#2A2A67]'
                >
                    {buttons.source}
                </NavLink>
                <NavLink
                    to={preview}
                    target='blank'
                    className='w-28 rounded-md bg-red-400 py-0.5 font-medium text-zinc-200 transition duration-300 hover:bg-slate-400 dark:bg-[#05CEC2] dark:text-[#2A2A67] dark:hover:bg-slate-200'
                >
                    {buttons.preview}
                </NavLink>
            </div>
        </div>
    )
}

export default Project
