import SkillList from './components/SkillList'
import { frontend, backend } from 'config/skills'
import content from './content.json'
import { useAppSelector } from 'redux/store'

const Skills = () => {
    const language = useAppSelector((store) => store.language)
    const { title } = content[language]
    return (
        <div id='skills' className='my-36'>
            <h1 className='text-center text-6xl font-bold text-[#05CEC2]'>{title}</h1>
            <div className='m-auto mt-20 grid w-fit grid-cols-2 gap-24'>
                <SkillList title='Frontend' skills={frontend} />
                <SkillList title='Backend' skills={backend} />
            </div>
        </div>
    )
}

export default Skills
