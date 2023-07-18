import { useAppSelector } from 'redux/store'
import { Navigators, ThemeSelector, LanguageSelector } from '../shared'
import content from '../shared/content.json'

const DesktopNavbar = () => {
    const language = useAppSelector((store) => store.language)
    const { title } = content[language]

    return (
        <nav className='hidden w-full items-center justify-between px-11 py-6 md:flex'>
            <h1 className='-mt-1.5 text-4xl font-bold text-zinc-800 dark:text-white'>{title}</h1>

            <div className='mx-4 hidden min-w-fit items-center gap-8 md:flex'>
                <Navigators style='text-zinc-700 dark:text-white font-semibold text-xl w-fit min-w-fit' />
            </div>

            <div className='mx-4 hidden items-center gap-4 md:flex'>
                <ThemeSelector />
                <LanguageSelector />
            </div>
        </nav>
    )
}

export default DesktopNavbar
