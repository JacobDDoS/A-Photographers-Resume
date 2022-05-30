import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from './Design';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/design" element={<Design/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about-me" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
