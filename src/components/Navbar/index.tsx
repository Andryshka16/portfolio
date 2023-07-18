import { useEffect, useState } from 'react'
import { useAppSelector } from 'redux/store'
import { HiMenu } from 'react-icons/hi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Navigators, ThemeSelector, LanguageSelector } from './components'
import { Portal } from 'components'
import content from './content.json'

const Navbar = () => {
    const language = useAppSelector((store) => store.language)
    const { title } = content[language]
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (visible) {
            document.body.classList.add('overflow-hidden')
            return () => document.body.classList.remove('overflow-hidden')
        }
    })

    return (
        <nav className='flex px-5 w-full items-center justify-between py-4 md:px-11'>
            <h1 className='-mt-1.5 text-3xl font-bold text-zinc-800 dark:text-white sm:text-4xl'>
                {title}
            </h1>
            <div className='mx-4 hidden min-w-fit items-center gap-8 md:flex'>
                <Navigators style='text-zinc-700 dark:text-white font-semibold text-xl w-fit min-w-fit' />
            </div>

            <div className='mx-4 hidden items-center gap-4 md:flex'>
                <ThemeSelector />
                <LanguageSelector />
            </div>
            <HiMenu
                size={35}
                className='dark:text-white md:hidden'
                onClick={() => setVisible(!visible)}
            />
            <Portal>
                <div
                    className={`fixed left-0 top-0 h-full w-full bg-zinc-200 px-10 transition duration-200 dark:bg-slate-800 md:hidden ${
                        !visible && '-translate-y-full'
                    }`}
                >
                    <div className='flex flex-col w-full h-full justify-between items-center'>
                        <div className='mx-8 mt-10 flex w-full items-center justify-between'>
                            <ThemeSelector />
                            <LanguageSelector />
                        </div>
                        <div className='flex flex-col gap-16'>
                            <Navigators
                                style='text-zinc-700 text-zinc-800 dark:text-white font-bold text-4xl'
                                onClick={() => setVisible(false)}
                            />
                        </div>
                        <IoIosCloseCircleOutline
                            className='mb-20 text-zinc-800 transition duration-200 hover:scale-105 dark:text-white'
                            size={70}
                            onClick={() => setVisible(false)}
                        />
                    </div>
                </div>
            </Portal>
        </nav>
    )
}

export default Navbar
