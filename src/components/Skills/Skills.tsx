import SkillList from './components/SkillList'
import { frontend, backend } from 'config/skills'

const Skills = () => (
    <div id='skills' className='my-36'>
        <h1 className='text-6xl text-center text-[#05CEC2] font-bold'>Development skills</h1>
        <div className='mt-20 grid grid-cols-2 w-fit m-auto gap-24'>
            <SkillList title='Frontend' skills={frontend} />
            <SkillList title='Backend' skills={backend} />
        </div>
    </div>
)

export default Skills
