import { BrowserRouter } from 'react-router-dom'
import { Navbar, Alert, About, Skills, Experience, ContactMe } from './components'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className='min-h-screen bg-slate-100 dark:bg-[#0f1829]'>
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

export default App
