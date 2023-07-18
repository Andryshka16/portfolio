import SkillList from './components/SkillList'
import { frontend, backend } from 'config/skills'
import content from './content.json'
import { useAppSelector } from 'redux/store'

const Skills = () => {
    const language = useAppSelector((store) => store.language)
    const { title } = content[language]
    return (
        <div id='skills' className='my-20 sm:my-36'>
            <h1 className='text-center text-5xl font-bold text-zinc-700 dark:text-teal-400 sm:text-6xl'>
                {title}
            </h1>
            <div className='m-auto mt-14 flex w-fit flex-wrap gap-x-24 gap-y-12 sm:mt-20'>
                <SkillList title='Frontend' skills={frontend} />
                <SkillList title='Backend' skills={backend} />
            </div>
        </div>
    )
}

export default Skills
