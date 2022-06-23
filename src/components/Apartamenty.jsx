import React from "react";


const Apartamenty = (props) => {
    console.log(props);

    return (

        <div>
            APARTAMENTY
        </div>

    )
}
export default Apartamenty;

const apartamenty1 = {
    cena: '300',
    kolor: 'Zolty',
    metraz: {
        balkon: '10m',
        ogrod: '30m',
    }
}
console.log(apartamenty1.kolor);

const propsy = {
    fruits: ['winogrona', 'ogórek'],
    car: 'bmw',
    bmw: {
        kolor1: 'zielony',
        kolor2: 'niebieski',
    },
    flowers: 'bratki'
}
console.log(propsy.fruits);
console.log(propsy.car);
console.log(propsy.flowers);
console.log(propsy.bmw.kolor2);
console.log(propsy.bmw.kolor1);