// import './styles/App.scss'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import background from './images/background.jpg'

const App = () => {
    return (
        <div
            className="App select-none flex justify-center items-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Body />
            <Footer />
        </div>
    )
}

export default App
