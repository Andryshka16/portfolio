import { HashLink } from 'react-router-hash-link'
import content from '../content.json'
import { useAppSelector } from 'redux/store'

const style = 'text-zinc-700 dark:text-white font-semibold text-xl'

const Navigators = () => {
    const language = useAppSelector((store) => store.language)
    const { about, skills, experience, contact } = content[language].navigators

    const scroll = (el: HTMLElement) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })

    return (
        <div className='flex items-center gap-10'>
            <HashLink className={style} to='#about' scroll={scroll}>
                {about}
            </HashLink>
            <HashLink className={style} to='#skills' scroll={scroll}>
                {skills}
            </HashLink>
            <HashLink className={style} to='#experience' scroll={scroll}>
                {experience}
            </HashLink>
            <HashLink className={style} to='#contact' scroll={scroll}>
                {contact}
            </HashLink>
        </div>
    )
}

export default Navigators
