import { useAppSelector } from 'redux/store'
import { Navigators, ThemeSelector, LanguageSelector } from './components'
import content from './content.json'

const Navbar = () => {
    const language = useAppSelector((store) => store.language)
    const { title } = content[language]
    return (
        <nav className='flex w-full items-center justify-between px-16 py-4'>
            <h1 className='text-4xl font-semibold dark:text-white'>{title}</h1>
            <Navigators />
            <div className='flex items-center gap-4'>
                <ThemeSelector />
                <LanguageSelector />
            </div>
        </nav>
    )
}

export default Navbar
