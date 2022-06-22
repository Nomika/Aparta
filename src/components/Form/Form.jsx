 import React from "react";
 import './Form.css';

 const Form = () => {
         return (
         <>
        <div>
 <form className='form fromLeft'>

 <input type='text' className="input t"></input><p className="tekstForm">Dzielnica w której chcesz się zatrzymać</p>
 <input type='text' className="input "></input><p className='tekstForm'>Ilość osób</p>
 <input type='datetime-local' className="input "></input><p className='tekstForm'>Data przyjazdu</p>
 <input type='datetime-local' className="input "></input><p className='tekstForm'> Data wyjazdu</p>

 <button type='text' className="input">Sprawdź dostępność pokoi</button>

 </form>
         </div>

         </>
         
        
     )
 }
export default Form;