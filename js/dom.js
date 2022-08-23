console.log(document.getElementById("features"));

console.log(document.querySelector("h1"));
console.log(document.querySelector(".features"));
console.log(document.querySelector("#features"));
console.log(document.querySelectorAll("p").forEach((el)=>console.log(el)));
console.log(document.querySelector("a").setAttribute("href", "https://www.youtube.com/watch?v=QR14xiP7Yn8"));
console.log(document.querySelector("a").getAttribute("href"));
const mi = document.querySelector("#features");
mi.style.setProperty("color", "#5C7EF4");
mi.style.setProperty("width", "500 px");
mi.style.setProperty("background", "#0DE687");

const letra = document.querySelector("#features");
 let text= `<p> Las tortuguitas son bonitas </p>
            <p> Se puede acceder y modificar </p>`
// letra.textContent = text; 
//TAREA
//proponer la interfax de presentacion de ejecicios, en donde se deben ver cada ejercicio realizado con un boton llamado consola que lleve al cada uno de los ejercicio empezando con la carculadora
 letra.innerHTML = text;

 const img = document.createElement("img");
 img.src = "https://t2.ea.ltmcdn.com/es/posts/3/7/4/la_tortuga_como_mascota_24473_orig.jpg";
 document.body.appendChild(img)

    const caja = document.createElement("div");
    caja.innerHTML = "<img src = 'dia-de-la-tortuga.jpg'>";
    img.appendChild(caja);
