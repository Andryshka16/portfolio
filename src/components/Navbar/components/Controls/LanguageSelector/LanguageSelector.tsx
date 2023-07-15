import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { MdLanguage } from 'react-icons/md'
import { BiSolidDownArrow } from 'react-icons/bi'
import Flag from 'react-country-flag'
import { setLanguage } from './redux/actions'

const options = [
    { code: 'EN', flag: 'GB', language: 'English' },
    { code: 'LV', flag: 'LV', language: 'Latviešu' },
    { code: 'RU', flag: 'RU', language: 'Русский' },
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

    return (
        <div ref={ref}>
            <div
                className='flex cursor-pointer items-center gap-1'
                onClick={() => setShowLanguages((prev) => !prev)}
            >
                <MdLanguage color='white' size={25} />
                <h2 className='w-5 text-base font-semibold text-white'>{language}</h2>
                <BiSolidDownArrow
                    color='white'
                    className={`transition duration-200 ${showLanguages && 'rotate-180'}`}
                    size={10}
                />
            </div>
            {showLanguages && (
                <div className='absolute right-16 top-14 rounded-md bg-[#2A2A67] py-4'>
                    {options.map(({ code, flag, language }) => (
                        <div
                            className='my-1 flex cursor-pointer items-center gap-3 px-10 transition duration-200 hover:bg-[#05CEC2] hover:bg-opacity-80'
                            onClick={() => {
                                dispatch(setLanguage(code))
                                setShowLanguages(false)
                            }}
                            key={language}
                        >
                            <Flag
                                countryCode={flag}
                                style={{ width: '24px', height: '18px', borderRadius: '3px' }}
                                svg
                            />
                            <h2 className='text-lg font-semibold text-white'>{language}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
