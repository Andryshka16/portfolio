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
        <div className='rounded-3xl bg-[#2A2A67] px-10 pb-1 pt-5'>
            <img src={image.source} className={image.style} alt='' />
            <h3 className='mt-4 w-80 text-center text-lg font-bold text-white '>
                {description[language]}
            </h3>
            <div className='m-auto my-5 flex w-fit gap-10'>
                <NavLink
                    to={source}
                    target='blank'
                    className='w-28 rounded-md border-2 border-[#05CEC2] bg-[#2A2A67] py-0.5 font-medium text-[#05CEC2] transition duration-300 hover:border-slate-200 hover:bg-slate-200 hover:text-[#2A2A67]'
                >
                    {buttons.source}
                </NavLink>
                <NavLink
                    to={preview}
                    target='blank'
                    className='hover: w-28 rounded-md bg-[#05CEC2] py-0.5 font-medium  text-[#2A2A67] transition duration-300 hover:bg-slate-200'
                >
                    {buttons.preview}
                </NavLink>
            </div>
        </div>
    )
}

export default Project
