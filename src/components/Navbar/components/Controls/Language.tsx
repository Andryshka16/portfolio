import { MdLanguage } from 'react-icons/md'
import { BiSolidDownArrow } from 'react-icons/bi'

const Language = () => {
    return (
        <div className='flex items-center gap-1'>
            <MdLanguage color='white' size={30} />
            <h2 className='text-white text-xl font-semibold'>EN</h2>
            <BiSolidDownArrow color='white' size={10} />
        </div>
    )
}

export default Language
