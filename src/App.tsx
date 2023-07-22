import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar, Alert, About, Skills, Experience, ContactMe } from './components'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
    useEffect(() => {
        AOS.init({ once: true })
    }, [])

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='min-h-screen bg-slate-100 px-5 dark:bg-[#0f1829]'>
                    <Alert />
                    <Navbar />
                    <About />
                    <Skills />
                    <Experience />
                    <ContactMe />
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App
