import React from 'react'
import './Navbar.css'



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
       
       <section>
      
           <div>
<p className= 'apartamenty'>Apartamenty w Sopocie</p></div>

<div>
<div className= 'menu'>
<div>Hostel</div>
            <div className="navbarButton">Apartament</div>
            <div className="navbarButton">Hotel</div>
            <div className="navbarButton">Pokój</div>
</div>
<div>

            <div className="wieza">zdjecie</div>
            <div className="wieza">zdejcie</div>
  
</div>
</div>

       </section>
    

       </>
    )
}

export default Navbar;