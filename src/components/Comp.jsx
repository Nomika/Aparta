import React from "react";


const Comp = (props) => {
    console.log(props);

    return (

        <div>
            Comp
        </div>

    )
}
export default Comp;

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