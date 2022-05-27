import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from './Design';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/design" element={<Design/>}/>
        {/* <Route>
          <Error />
        </Route> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
