import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Home/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </main>
        </div>
    );
}

export default App;
