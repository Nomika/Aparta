import React from "react";
import './Formularz.css'

const Formularz = () => {
    return (
        <div>
        <form className="formContainer">
         
            <input type="text" className='input'>ilość_osób</input>
            <input type="text" className='input'>data_przyjazdu</input>
            <input type="text" className='input'>data_wyjazdu</input>
            
        <button className="button">Sprawdź dostępność pokoi</button>
            </form>
            </div>
    )
}
export default Formularz;

