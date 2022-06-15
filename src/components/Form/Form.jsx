 import React from "react";
 import './Form.css';

 const Form = () => {
         return (
         <>
        <div>
 <form className='form fromLeft'>

 <input type='text' className="input"></input><a className='tekstForm'>Dzielnica w której chcesz się zatrzymać</a>
 <input type='text' className="input"></input><a className='tekstForm'>Ilość osób</a>
 <input type='datetime-local' className="input"></input><a className='tekstForm'>Data przyjazdu</a>
 <input type='datetime-local' className="input"></input><a className='tekstForm'> Data wyjazdu</a>

 <button type='text' className="input tekstForm">Szukaj</button>

 </form>
         </div>

         </>
         ///<section>
//<nav class="container-fluid nav justify-content-center dwa fromLeft">
//  <ul class="list-unstyled">
 
  
//<input class="my-2"></input><a href="#" class="mx-2">Dzielnica w której chcesz się zatrzymać</a><br>
//<input class="my-2"></input><a href="#" class="mx-2">ilość osób</a><br>
//<input type="datetime-local" class="form-control" placeholder="Datetime-local input"><a href="#">data_przyjazdu</a></input>
//<input type="datetime-local" class="form-control" placeholder="Datetime-local input"><a href="#">data_wyjazdu</a></input>
//<br>
//<button class="my-2"><a href="apartamenty.html">Sprawdź dostępność pokoi</a></button>

 // </ul>
 //</nav>
 //</section>
         
        
     )
 }
export default Form;