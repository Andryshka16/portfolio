import { IoIosCheckmarkCircle } from 'react-icons/io'
import { useAppSelector } from 'redux/store'
import content from '../content.json'

interface SkillListProps {
    title: string
    skills: {
        skill: string
        level: 1 | 2 | 3
    }[]
}

const SkillList = ({ title, skills }: SkillListProps) => {
    const language = useAppSelector((store) => store.language)

    const { skillLevels } = content[language]

    return (
        <div className='m-auto w-[335px] rounded-[32px] bg-gray-200 px-7 pb-6 dark:bg-[#2A2A67] sm:w-[420px] sm:px-12'>
            <h1 className='my-5 text-center text-3xl font-bold text-zinc-800 dark:text-white sm:text-4xl'>
                {title}
            </h1>
            <div className='m-auto grid grid-cols-2 gap-y-2.5'>
                {skills.map(({ skill, level }) => (
                    <div className='flex gap-2' key={skill}>
                        <IoIosCheckmarkCircle size={20} color='#3EB9ED' className='mt-1' />
                        <div className='h-fit w-fit'>
                            <h1 className='text-base font-bold text-zinc-800 dark:text-white sm:text-xl'>
                                {skill}
                            </h1>
                            <h3 className='text-sm font-bold text-zinc-600 dark:text-white dark:text-opacity-50 sm:text-base'>
                                {skillLevels[level]}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillList
