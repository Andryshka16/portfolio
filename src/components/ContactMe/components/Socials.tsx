import { VscGithub } from 'react-icons/vsc'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Socials = () => (
    <div className='mt-10 flex items-center justify-center gap-4'>
        <NavLink to='https://github.com/Andryshka16' target='blank'>
            <VscGithub
                className='text-gray-400 transition duration-200 hover:scale-105'
                size={50}
            />
        </NavLink>
        <NavLink to='https://www.instagram.com/andryshka.16' target='blank'>
            <AiOutlineInstagram
                className='text-gray-400 transition duration-200 hover:scale-105'
                size={62}
            />
        </NavLink>
        <NavLink to='https://wa.me/+37128176717' target='blank'>
            <AiOutlineWhatsApp
                className='text-gray-400 transition duration-200 hover:scale-105'
                size={56}
            />
        </NavLink>
        <NavLink
            to='https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%BB%D0%B0%D0%BF%D1%87%D0%B8%D0%BA-03b72326b'
            target='blank'
        >
            <AiOutlineLinkedin
                className='text-gray-400 transition duration-200 hover:scale-105'
                size={60}
            />
        </NavLink>
    </div>
)

export default Socials
