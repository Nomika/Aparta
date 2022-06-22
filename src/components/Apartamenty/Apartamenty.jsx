import React from "react";
import './Apartamenty.css';


const Apartamenty = (props) => {
    console.log(props);

        return (
        
       <div>
Napisze Cos
        </div>
        
        )
        }
        export default Apartamenty;

        const object = {
            name: 'Monika',
            surname: 'Saczewska',
            hobbys: {
                zainteresowania: 'windsurfing',
            }
        }
        console.log(object.surname);

        const props = {
            fruits: ['winogrona', 'ogórek'],
            car: 'bmw',
            bmw: {
                kolor1: 'zielony',
                kolor2: 'niebieski',
            },
            flowers: 'bratki'
        }
         console.log(props.fruits);
         console.log(props.car);
         console.log(props.flowers);
         console.log(props.bmw.kolor2);
         console.log(props.bmw.kolor1);