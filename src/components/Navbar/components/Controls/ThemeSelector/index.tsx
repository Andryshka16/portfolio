import { useEffect } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useLocalStorage } from './hooks'

const ThemeSelector = () => {
    const [darkMode, setDarkMode] = useLocalStorage(true, 'darkMode')

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <div
            className='relative flex w-16 cursor-pointer items-center justify-between rounded-full bg-[#2A2A67] px-2.5 py-1.5'
            onClick={() => setDarkMode(!darkMode)}
        >
            <div
                className={`absolute h-5 w-5 rounded-full bg-white transition-all duration-200 ${
                    darkMode ? 'right-2' : 'right-9'
                }`}
            />
            <BsFillSunFill color='white' size={18} />
            <BsFillMoonStarsFill color='white' size={16} />
        </div>
    )
}

export default ThemeSelector
