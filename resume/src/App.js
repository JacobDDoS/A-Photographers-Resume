import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from './Design';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route path="/design" element={<Design/>}/>
        {/* <Route>
          <Error />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
