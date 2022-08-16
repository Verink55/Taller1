
let peliculas=['bajo la misma estrella','antes de ti','Sao','tres metros sobre el cielo','la razon de estar con tigo', 'hakuna matata']

console.log(`la posicion tres es ${peliculas[3]}`);//imprimir la posicion tres

console.log(`La longitud del array es ${peliculas.length}`);//medir la longitud de la ray 

console.log(`La ultima posicion es ${peliculas[peliculas.length-1]}`);//traer el ultimo elemento 

peliculas.push(`jurassic park dominion`);//agregar una nueva pisicion "pelicula"

peliculas.pop();//eliminar el ultimo elemento "pelicula"

peliculas.unshift(`Titanes del Pacífico`);//se cambia a la posicion 0  "pelicula"

peliculas.shift();//borrar el primer elemento "pelicula"

peliculas.splice(1,3);//borrar el elemento desde donde incia  "pelicula"

peliculas.forEach(function(perrito, index){
    console.log(`posicion ${index} elemento ${perrito}`)
});

console.log(peliculas);

let aprendices = [];
let seguir = true;

while (seguir == true) {
    aprendices.push(prompt("Ingrese nombre aprendiz"));

    seguir = confirm ("Desea ingresar otro aprendiz?");
}
    console.log(`Los aprendices son ${aprendices}`);

    let filtro = aprendices.filter(aprendices => aprendices == "Veronica");// generar un nuvo areglo  

    let busqueda = aprendices.find(aprendices => aprendices == "Sofia"); //buscar el primero que encuentre
    
    let orden =aprendices.sort();
    console.log(orden);

    let aprendiz=[
    {primernombre:"kirito",primerapellido:"kirigalla"},
    {primernombre:"veronica",primerapellido:"jimenez"},
]
    console.log(aprendiz);

    let nombrecompleto = aprendiz.map(function(el,index,ar){
        return `${el.primernombre} ${el.primerapellido}`
    })
    console.log(nombrecompleto);