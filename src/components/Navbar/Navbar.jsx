import React from 'react'
import './Navbar.css'
import wieza from '../../img/13.jpg'
import dom from '../../img/9.jpg'
import most from '../../img/1.jpg'
import mewa from '../../img/4.jpg'
import badyle from '../../img/6.jpg'
import {Link} from "react-router-dom";


export const Navbar = () => {
    const name = 'Jan';
    const name2= 'Monika'

    return (
        <>
        <div className= 'navbarContainer'>
     
        <div className= 'navbarContent'>
            <div className="navbarLogo">  <Link to="/">LOGO</Link></div>
            <div className="navbarButton"><Link to="Promocje">Promocje noclegów w Sopocie</Link></div>
            <div className="navbarButton"><Link to="kontakt">Kontakt</Link></div>
            <div className="navbarButton"><Link to="login">Zaloguj się</Link></div>
        </div>

       </div> 
       
      

       <div className="wieza"><img src={wieza} /></div>


        <div><p className= 'apartamenty'>Apartamenty w Sopocie</p></div>

      
    <div className='pakiet1'>

    <div className='pakiet'><img src={dom} /></div>
    <div className='pakiet'><img src={most} /></div>
    <div className='pakiet'><img src={mewa} /></div>
    <div className='pakiet'><img src={badyle} /></div>

    </div>

       </>
    )
}

export default Navbar;