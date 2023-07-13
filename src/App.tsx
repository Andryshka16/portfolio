import { BrowserRouter } from 'react-router-dom'
import { About, Experience, Navbar, Contact } from './components'
import Skills from 'components/Skills/Skills'

const App = () => (
    <BrowserRouter>
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Contact />
    </BrowserRouter>
)

export default App
