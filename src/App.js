import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Companies from './Components/Companies';
import Residencies from './Components/Residencies';
import Value from './Components/Value.js';
import Contact from './Components/Contact.js';
import GetStarted from './Components/GetStarted';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Header />
     <div className='white-gradient' />
     <HeroSection />
     <Companies />
     <Residencies />
     <Value />
     <Contact />
     <GetStarted />
     <Footer />
    </div>
  );
}

export default App;
