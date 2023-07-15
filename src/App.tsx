import { BrowserRouter } from 'react-router-dom'
import { Navbar, Alert, About, Skills, Experience, ContactMe } from './components'
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
            <ContactMe />
        </BrowserRouter>
    </Provider>
)

export default App
