import React from 'react'
import './Navbar.css'
import wieza from '../../img/13.jpg'
import dom from '../../img/9.jpg'
import most from '../../img/1.jpg'
import mewa from '../../img/4.jpg'
import badyle from '../../img/6.jpg'



export const Navbar = () => {
    const name = 'Jan';
    const name2= 'Monika'

    return (
        <>
        <div className= 'navbarContainer'>
     
        <div className= 'navbarContent'>
            <div className="navbarLogo">LOGO</div>
            <div className="navbarButton">Najlepsze nocelgi w Sopocie</div>
            <div className="navbarButton">Odpocznij nad morzem</div>
            <div className="navbarButton">Zaloguj się</div>
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