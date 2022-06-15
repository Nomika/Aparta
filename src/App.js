
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Promocje from './pages/Promocje/Promocje';
import Zalogujsie from './pages/Zalogujsie/Zalogujsie';





function App() {
  return (
  <>
    <div className="App">
      <Navbar />
    
      <Routes>
      <Route path='/' element = { <Home />} />
        <Route path="kontakt" element={ <Contact />} />
        <Route path="promocje" element={ <Promocje />} />
        <Route path="login" element={ <Zalogujsie />} />
      </Routes> 

    
    </div>
</>

  );
}



export default App;
