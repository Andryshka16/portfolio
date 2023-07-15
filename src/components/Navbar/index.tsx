import { useAppSelector } from 'redux/store'
import LanguageSelector from './components/Controls/LanguageSelector/LanguageSelector'
import Theme from './components/Controls/Theme'
import Navigators from './components/Navigators'
import content from './content.json'

const Navbar = () => {
    const language = useAppSelector((store) => store.language)
    const { title } = content[language]
    return (
        <nav className='flex w-full items-center justify-between px-16 py-4'>
            <h1 className='text-3xl font-semibold text-white'>{title}</h1>
            <Navigators />
            <div className='flex items-center gap-3'>
                <Theme />
                <LanguageSelector />
            </div>
        </nav>
    )
}

export default Navbar
