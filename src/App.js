
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element = { <Home />} />
        <Route path="kontakt" element={ <Contact />} />
      </Routes>
    
    </div>
  );
}



export default App;
