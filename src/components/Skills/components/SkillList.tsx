import { IoIosCheckmarkCircle } from 'react-icons/io'

interface SkillListProps {
    title: string
    skills: {
        skill: string
        level: string
    }[]
}

const SkillList = ({ title, skills }: SkillListProps) => (
    <div className='w-[420px] m-auto bg-[#2A2A67] rounded-[32px] px-12 pb-6'>
        <h1 className='my-5 text-center font-bold text-4xl text-white'>{title}</h1>
        <div className='m-auto grid grid-cols-2 gap-y-2.5'>
            {skills.map(({ skill, level }) => (
                <div className='flex gap-2'>
                    <IoIosCheckmarkCircle size={20} color='#3EB9ED' className='mt-1' />
                    <div className='w-fit h-fit'>
                        <h1 className='text-xl text-white font-bold'>{skill}</h1>
                        <h3 className='text-md text-white font-bold text-opacity-50'>{level}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default SkillList
