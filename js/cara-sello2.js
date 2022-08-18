function lanzarMoneda() {
    let moneda = Math.floor((Math.random()*2) + 1);
    return moneda;
}

function ganar(saldo, apuesta) {
    saldo = saldo + (apuesta * 2);
    return saldo;
}

function perder(saldo, apuesta) {
    saldo = saldo - (apuesta * 2);
    return saldo;
}

// let lanzar = function lanzarMoneda(){
//     let moneda = Math.floor((Math.random) + 1);
//     return moneda;
// }

// let lanzamiento = lanzar();

// let ganar = function (saldo, apuesta) {
//     saldo = saldo + (apuesta * 2);
//     return saldo;
// }

// ganar (saldo, apuesta);

let seguir  = true;
let saldo = 0;
let jugador = prompt ("Ingresar el nombre del jugador");

saldo = parseInt(prompt("cuanto deseas recargar para jugar"));

while (seguir = true) {
    let eleccion = prompt(`${jugador} Elige: 1.Cara / 2.Sello`)    
    let apuesta = parseInt(prompt(`De tu saldo actual ${saldo} ¿cuanto deseas apostar?`));
    let lanzamiento = lanzarMoneda();

    if (lanzamiento == 1 && eleccion == 1) {
        saldo = ganar (saldo, apuesta);
        console.log(`El lanzamiento fue Cara escogiste Cara Tu ganas!!!, tu nuevo saldo es ${saldo}`);

    } else if (lanzamiento == 2 && eleccion == 2) {
        saldo = ganar (saldo, apuesta);
        console.log(`El lanzamiento fue Cara escogiste Sello Tu ganas!!!, tu nuevo saldo es ${saldo}`);

    }else if (lanzamiento == 1 && eleccion == 2) {
        saldo = perder (saldo, apuesta);
        console.log(`El lanzamiento fue Cara escogiste Cara Tu Perdiste!!!, tu nuevo saldo es ${saldo}`);

    }else if (lanzamiento == 2 && eleccion == 1) {
        saldo = perder (saldo, apuesta);
        console.log(`El lanzamiento fue Cara escogiste Sello Tu Perdiste!!!, tu nuevo saldo es ${saldo}`);
    }

}

// console.log(`El lanzamiento fue ${lanzarMoneda()}`)
// let lanzamiento = lanzarMoneda();
// console.log(`El lanzamiento fue ${lanzamiento}`)