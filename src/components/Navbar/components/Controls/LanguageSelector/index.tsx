import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { MdLanguage } from 'react-icons/md'
import { BiSolidDownArrow } from 'react-icons/bi'
import { setLanguage } from './redux/actions'
import Flag from 'react-country-flag'

type Language = 'EN' | 'LV' | 'RU'

const options = [
    { code: 'EN', flag: 'GB', language: 'English' },
    { code: 'LV', flag: 'LV', language: 'Latviešu' },
    { code: 'RU', flag: 'RU', language: 'Русский' }
]

const LanguageSelector = () => {
    const dispatch = useAppDispatch()
    const language = useAppSelector((store) => store.language)

    const ref = useRef<null | HTMLDivElement>(null)
    const [showLanguages, setShowLanguages] = useState(false)

    useEffect(() => {
        if (showLanguages) {
            const listener = (e: MouseEvent) => {
                if (!ref.current?.contains(e.target as Node)) {
                    setShowLanguages(false)
                }
            }
            document.addEventListener('mousedown', listener)
            return () => document.removeEventListener('mousedown', listener)
        }
    }, [showLanguages])

    const rotation = showLanguages ? 'rotate-180' : 'rotate-0'

    return (
        <div ref={ref}>
            <div
                className='flex cursor-pointer items-center gap-1'
                onClick={() => setShowLanguages(!showLanguages)}
            >
                <MdLanguage className='text-zinc-800 dark:text-white' size={30} />
                <h2 className='w-5 text-base font-semibold dark:text-white'>{language}</h2>
                <BiSolidDownArrow
                    className={`transition-transform duration-200 dark:text-white ${rotation}`}
                    size={12}
                />
            </div>
            {showLanguages && (
                <div className='absolute right-16 top-16 rounded-md bg-zinc-200 py-4 dark:bg-[#2A2A67]'>
                    {options.map(({ code, flag, language }) => (
                        <div
                            className='my-1 flex cursor-pointer items-center gap-3 px-10 transition duration-200 hover:bg-zinc-400 hover:bg-opacity-80 dark:hover:bg-[#05CEC2]'
                            onClick={() => {
                                dispatch(setLanguage(code as Language))
                                setShowLanguages(false)
                            }}
                            key={language}
                        >
                            <Flag
                                countryCode={flag}
                                style={{ width: '24px', height: '18px', borderRadius: '3px' }}
                                svg
                            />
                            <h2 className='text-lg font-semibold text-zinc-800 dark:text-white'>
                                {language}
                            </h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
