import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Nav from './components/Nav';
import { Routes, Route} from "react-router-dom"

const App = () => {

  return (
    <div className='App'>
      <Nav />
      <Header/>
      <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/Projects" element={<Projects/>} />
      </Routes>

      <Footer />

      
    </div>
  );
}

export default App;
