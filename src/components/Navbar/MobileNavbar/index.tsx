import { useEffect, useState } from 'react'
import { useAppSelector } from 'redux/store'
import { HiMenu } from 'react-icons/hi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Navigators, ThemeSelector, LanguageSelector, content } from '../shared'
import { Portal } from 'components'

const MobileNavbar = () => {
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
        <nav className='flex w-full items-center justify-between px-5 py-8 md:hidden'>
            <h1 className='-mt-1.5 text-4xl font-bold text-zinc-800 dark:text-white'>{title}</h1>
            <HiMenu size={35} className='dark:text-white' onClick={() => setVisible(!visible)} />
            <Portal>
                <div
                    className={`fixed left-0 top-0 h-full w-full bg-zinc-200 px-10 transition duration-200 dark:bg-slate-800 ${
                        !visible && '-translate-y-full'
                    }`}
                >
                    <div className='flex h-full w-full flex-col items-center'>
                        <div className='mx-8 my-10 flex w-full items-center justify-between'>
                            <ThemeSelector />
                            <LanguageSelector />
                        </div>
                        <div className='my-10 flex h-full flex-col justify-between'>
                            <Navigators
                                style='text-zinc-700 text-zinc-800 dark:text-white font-bold text-4xl'
                                onClick={() => setVisible(false)}
                            />
                        </div>
                        <IoIosCloseCircleOutline
                            className='my-10 text-zinc-800 transition duration-200 hover:scale-105 dark:text-white'
                            size={100}
                            onClick={() => setVisible(false)}
                        />
                    </div>
                </div>
            </Portal>
        </nav>
    )
}

export default MobileNavbar
