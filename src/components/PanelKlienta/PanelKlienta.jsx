import React from "react";
import './PanelKlienta.css';

const panelKlienta = () => {
        return (
        <>
       <div>

       <form className='form fromLeft'>

<input type='text' className="input tekstForm2"></input><p className="tekstForm2">Dzielnica w której chcesz się zatrzymać</p>
<input type='text' className="input tekstForm2"></input><p className='tekstForm2'>Ilość osób</p>
<input type='datetime-local' className="input tekstForm2"></input><a className='tekstForm2'>Data przyjazdu</a>
<input type='datetime-local' className="input tekstForm2"></input><a className='tekstForm2'> Data wyjazdu</a>

<button type='text' className="input tekstForm2">Sprawdź dostępność pokoi</button>

</form>
<hr></hr>
       </div>
        </>

        
       
    )
}
export default panelKlienta;