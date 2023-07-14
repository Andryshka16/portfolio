import { IoIosCheckmarkCircle } from 'react-icons/io'

interface SkillListProps {
    title: string
    skills: {
        skill: string
        level: string
    }[]
}

const SkillList = ({ title, skills }: SkillListProps) => (
    <div className='m-auto w-[420px] rounded-[32px] bg-[#2A2A67] px-12 pb-6'>
        <h1 className='my-5 text-center text-4xl font-bold text-white'>{title}</h1>
        <div className='m-auto grid grid-cols-2 gap-y-2.5'>
            {skills.map(({ skill, level }) => (
                <div className='flex gap-2' key={skill}>
                    <IoIosCheckmarkCircle size={20} color='#3EB9ED' className='mt-1' />
                    <div className='h-fit w-fit'>
                        <h1 className='text-xl font-bold text-white'>{skill}</h1>
                        <h3 className='text-md font-bold text-white text-opacity-50'>{level}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default SkillList
