import { HashLink } from 'react-router-hash-link'

const style = 'text-white font-semibold text-lg'

const Navigators = () => {
    const scroll = (el: HTMLElement) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    return (
        <div className='flex items-center gap-10'>
            <HashLink className={style} to='#about' scroll={scroll}>
                About
            </HashLink>
            <HashLink className={style} to='#skills' scroll={scroll}>
                Skills
            </HashLink>
            <HashLink className={style} to='#experience' scroll={scroll}>
                Experience
            </HashLink>
            <HashLink className={style} to='#contact' scroll={scroll}>
                Contact
            </HashLink>
        </div>
    )
}

export default Navigators
