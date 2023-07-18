import { MouseEventHandler } from 'react'
import { useAppSelector } from 'redux/store'
import { HashLink } from 'react-router-hash-link'
import { content } from '../shared'

interface NavigatorsProps {
    style: string
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

const Navigators = ({ style, onClick }: NavigatorsProps) => {
    const language = useAppSelector((store) => store.language)
    const { about, skills, experience, contact } = content[language].navigators

    const scroll = (el: HTMLElement) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })

    return (
        <>
            <HashLink className={style} to='#about' scroll={scroll} onClick={onClick}>
                {about}
            </HashLink>
            <HashLink className={style} to='#skills' scroll={scroll} onClick={onClick}>
                {skills}
            </HashLink>
            <HashLink className={style} to='#experience' scroll={scroll} onClick={onClick}>
                {experience}
            </HashLink>
            <HashLink className={style} to='#contact' scroll={scroll} onClick={onClick}>
                {contact}
            </HashLink>
        </>
    )
}

export default Navigators
