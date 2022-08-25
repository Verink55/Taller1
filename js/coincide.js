
let coin = document.getElementById("coincidir");

coin.addEventListener('click',(e)=>{
    e.preventDefault();
    let nom=parseInt(document.getElementById("nombre").value);
    let ape=parseInt(document.getElementById("apellido").value);
    let mate=parseInt(document.getElementById("materia").value);
    const resp = document.getElementById("respuesta")

    if(nom==1 && ape==1 && mate==1){
        let texto =`<h2> <i class="fa-solid fa-circle-check"></i> El nombre, el apellido y materia coinciden </h2>`;
        resp.innerHTML = texto;
    }
    else if(nom==2 && ape==2 && mate==1){
        let texto =`<h2> <i class="fa-solid fa-circle-check"></i> El nombre, el apellido y materia coinciden </h2>`;
        resp.innerHTML = texto;

    }
    else if(nom==3 && ape==3 && mate==1){
        let texto =`<h2> <i class="fa-solid fa-circle-check"></i> El nombre, el apellido y materia coinciden </h2>`;
        resp.innerHTML = texto;

    }
    else if(nom==4 && ape==4 && mate==1){
        let texto =`<h2> <i class="fa-solid fa-circle-check"></i> El nombre, el apellido y materia coinciden </h2>`;
        resp.innerHTML = texto;
    }
    else if(nom==5 && ape==5 && mate==1){
        let texto =`<h2> <i class="fa-solid fa-circle-check"></i> El nombre, el apellido y materia coinciden </h2>`;
        resp.innerHTML = texto;

    }
    else if(nom==6 && ape==6 && mate==1){
        let texto =`<h2> <i class="fa-solid fa-circle-check"></i> El nombre, el apellido y materia coinciden </h2>`;
        resp.innerHTML = texto;

    }
    else if(nom==7 && ape==7 && mate==1){
        let texto =`<h2> <i class="fa-solid fa-circle-check"></i> El nombre, el apellido y materia coinciden </h2>`;
        resp.innerHTML = texto;

    }
    else {
        let texto = `<h2> <i class="fa-solid fa-circle-xmark"></i> El nombre, el apellido y materia NO coinciden </h2>`;
        resp.innerHTML = texto;
    }

})