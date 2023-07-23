import { VscGithub } from 'react-icons/vsc'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Socials = () => (
    <div className='mt-10 flex h-28 items-center justify-center gap-4 sm:mt-14'>
        <NavLink to='https://github.com/Andryshka16' target='blank'>
            <VscGithub
                className='text-gray-500 transition duration-200 hover:scale-105 dark:text-gray-400'
                size={50}
            />
        </NavLink>
        <NavLink to='https://www.instagram.com/andryshka.16' target='blank'>
            <AiOutlineInstagram
                className='text-gray-500 transition duration-200 hover:scale-105 dark:text-gray-400'
                size={62}
            />
        </NavLink>
        <NavLink to='https://wa.me/+37128176717' target='blank'>
            <AiOutlineWhatsApp
                className='text-gray-500 transition duration-200 hover:scale-105 dark:text-gray-400'
                size={56}
            />
        </NavLink>
        <NavLink to='https://www.linkedin.com/in/andrey-lapchik-03b72326b' target='blank'>
            <AiOutlineLinkedin
                className='text-gray-500 transition duration-200 hover:scale-105 dark:text-gray-400'
                size={60}
            />
        </NavLink>
    </div>
)

export default Socials
