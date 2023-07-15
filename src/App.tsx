import { BrowserRouter } from 'react-router-dom'
import { Navbar, Alert, About, Skills, Experience, Contact } from './components'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Alert />
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </BrowserRouter>
    </Provider>
)

export default App
