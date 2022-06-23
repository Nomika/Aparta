
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Promocje from './pages/Promocje/Promocje';
import Zalogowano from './pages/Zalogowano/Zalogowano';
import Zalogujsie from './pages/Zalogujsie/Zalogujsie';
import Comp from './components/Comp';
import Apartamenty from './components/Apartamenty';




function App() {
  return (
  <>
    <div className="App">

    <Comp fruits={['jablko', 'banan']} cars={'autko'} />

   

      <Navbar />
    
      <Routes>
      <Route path='/' element = { <Home />} />
        <Route path="kontakt" element={ <Contact />} />
        <Route path="promocje" element={ <Promocje />} />
        <Route path="login" element={ <Zalogujsie />} />
        <Route path="panelKlienta" element={ <Zalogowano />} />
      </Routes> 

     
    </div>
   
</>

  );
}



export default App;
