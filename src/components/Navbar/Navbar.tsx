import Language from './components/Controls/Language'
import Theme from './components/Controls/Theme'
import Navigators from './components/Navigators'

const Navbar = () => (
    <nav className='flex w-full items-center justify-between px-16 py-4'>
        <h1 className='text-3xl font-semibold text-white'>Portfolio</h1>
        <Navigators />
        <div className='flex items-center gap-4'>
            <Theme />
            <Language />
        </div>
    </nav>
)

export default Navbar
